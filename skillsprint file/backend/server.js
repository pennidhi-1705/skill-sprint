import express from "express";
import cors from "cors";
import "dotenv/config";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", async (_req, res) => {
  if (!pool) return res.json({ ok: true, database: "not configured", mode: "prototype" });
  try { await pool.query("SELECT 1"); res.json({ ok: true, database: "connected" }); }
  catch { res.status(503).json({ ok: false, database: "unavailable" }); }
});

app.post("/api/matching", (req, res) => {
  const { student = {}, task = {} } = req.body;
  const skills = (student.skills || []).map(x => String(x).toLowerCase());
  const required = (task.requiredSkills || []).map(x => String(x).toLowerCase());
  const matched = required.filter(x => skills.includes(x));
  const skill = required.length ? Math.round(matched.length / required.length * 40) : 0;
  const availability = 25;
  const location = task.workMode === "Remote" || student.location === task.location ? 20 : 8;
  const experience = Math.min(15, Number(student.experienceScore || 0));
  const total = Math.min(100, skill + availability + location + experience);
  res.json({ total, skill, availability, location, experience, source: "server rule-based fallback" });
});

// ---------------------------------------------------------------------------
// POST /api/harry/chat — optional real-AI backend for Harry's open-ended
// conversation fallback (see src/harry/harryAIProvider.js and
// src/services/harryService.js's getHarryReply()).
//
// Every opportunity/matching/application answer is handled entirely on the
// frontend by the deterministic engine in harryService.js and never reaches
// this route - this endpoint only ever sees messages Harry couldn't
// otherwise classify, so it can't be used to fabricate opportunity data.
//
// The API key lives only here, in the server process environment. It is
// never sent to, or readable from, the frontend.
// ---------------------------------------------------------------------------
app.post("/api/harry/chat", async (req, res) => {
  const apiKey = process.env.AI_API_KEY || process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // No provider configured on this deployment - the frontend already
    // knows how to fall back gracefully to Harry's deterministic reply.
    return res.status(501).json({ error: "AI provider not configured" });
  }

  const { message, student = {}, fallback = "" } = req.body || {};
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "message is required" });
  }

  const systemPrompt = [
    "You are Harry, a friendly AI assistant built into the SkillSprint student platform.",
    "You handle general conversation, study/career guidance, productivity questions, and general doubts.",
    "You do NOT have live opportunity, matching, or application data available to you right now - never invent specific opportunity names, organizations, deadlines, rewards, or match percentages.",
    "If the student asks to find opportunities, check a match, see their status, or apply, tell them to ask that directly so Harry's built-in opportunity tools (which use real data) can help instead.",
    "Keep answers concise, warm, and practical.",
    student?.name ? `The student's name is ${student.name}.` : "",
    Array.isArray(student?.skills) && student.skills.length ? `Known skills: ${student.skills.join(", ")}.` : "",
    student?.targetRole ? `Target role: ${student.targetRole}.` : "",
    student?.maxHoursPerWeek ? `Stated availability: about ${student.maxHoursPerWeek} hours/week.` : ""
  ].filter(Boolean).join(" ");

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 400,
        system: systemPrompt,
        messages: [{ role: "user", content: message }]
      })
    });

    if (!response.ok) {
      return res.status(502).json({ error: "AI provider request failed" });
    }

    const data = await response.json();
    const text = (data.content || [])
      .filter(block => block.type === "text")
      .map(block => block.text)
      .join("\n")
      .trim();

    res.json({ reply: text || fallback || null });
  } catch {
    res.status(502).json({ error: "AI provider request failed" });
  }
});

app.use((err, _req, res, _next) => res.status(500).json({ error: "Internal server error" }));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`SkillSprint API listening on ${port}`));