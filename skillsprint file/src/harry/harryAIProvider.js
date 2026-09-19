// harryAIProvider.js
//
// Thin client for Harry's OPTIONAL real-AI backend call.
//
// This is only used as a fallback for open-ended messages the deterministic
// engine in services/harryService.js doesn't recognize (see intent
// "unknown"). Every opportunity/matching/application answer still goes
// through the deterministic engine + the real services, never through here -
// that's what keeps Harry from inventing opportunities, organizations, or
// match percentages.
//
// No API key ever lives in this file or anywhere else in the frontend. The
// key (AI_API_KEY / ANTHROPIC_API_KEY) lives only in the backend process
// environment - see backend/server.js's POST /api/harry/chat.
//
// If the backend route isn't configured (no key set) it responds 501 and we
// silently fall back to Harry's existing deterministic reply. Same for any
// network error or timeout - the student always gets an answer either way.

const AI_ENDPOINT = "/api/harry/chat";
const TIMEOUT_MS = 8000;

/**
 * @param {string} message - the student's raw message
 * @param {object|null} student - current student profile (only a small,
 *   non-sensitive subset is sent - see below)
 * @param {object} context - the running conversation context
 * @param {string} fallbackText - the deterministic engine's own reply, sent
 *   along so the backend can return it verbatim if it has nothing better
 * @returns {Promise<string|null>} the AI reply text, or null if the AI
 *   provider isn't available/configured/reachable (caller should keep using
 *   its own fallback text in that case)
 */
export async function tryHarryAIProvider(message, student, context, fallbackText) {
  if (typeof fetch !== "function") return null;

  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timer = controller ? setTimeout(() => controller.abort(), TIMEOUT_MS) : null;

  try {
    const res = await fetch(AI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        fallback: fallbackText || "",
        student: {
          name: student?.name || null,
          skills: student?.skills || [],
          targetRole: student?.targetRole || null,
          experienceScore: student?.experienceScore ?? null,
          maxHoursPerWeek: context?.maxHoursPerWeek ?? null
        }
      }),
      signal: controller ? controller.signal : undefined
    });

    if (!res.ok) return null; // e.g. 501 = AI provider not configured on this deployment

    const data = await res.json();
    const text = typeof data?.reply === "string" ? data.reply.trim() : "";
    return text || null;
  } catch {
    // Network error, timeout, route missing in this environment, etc. -
    // Harry just keeps talking using the deterministic engine.
    return null;
  } finally {
    if (timer) clearTimeout(timer);
  }
}
