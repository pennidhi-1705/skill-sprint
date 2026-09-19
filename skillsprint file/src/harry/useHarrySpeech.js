import { useCallback, useEffect, useRef, useState } from "react";

// useHarrySpeech.js
//
// Wraps the browser-native Web Speech API (SpeechRecognition for input,
// speechSynthesis for output) so HarryWidget doesn't need to touch either
// API directly. No external API key is required, and everything degrades
// gracefully when a browser doesn't support one or both pieces.

function getRecognitionCtor() {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

export function useHarrySpeech({ onResult, onError, onSpeechStart, onSpeechEnd } = {}) {
  const RecognitionCtor = getRecognitionCtor();
  const speechSupported = typeof window !== "undefined" && "speechSynthesis" in window;
  const recognitionSupported = Boolean(RecognitionCtor);

  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [voiceOutputEnabled, setVoiceOutputEnabled] = useState(() => {
    try {
      const saved = window.localStorage.getItem("harry:voiceOutputEnabled");
      return saved === null ? true : saved === "true";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try { window.localStorage.setItem("harry:voiceOutputEnabled", String(voiceOutputEnabled)); } catch { /* ignore */ }
  }, [voiceOutputEnabled]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch { /* ignore */ }
      }
      if (speechSupported) {
        try { window.speechSynthesis.cancel(); } catch { /* ignore */ }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startListening = useCallback(() => {
    if (!recognitionSupported) {
      onError?.("unsupported");
      return;
    }
    if (listening) return;

    const recognition = new RecognitionCtor();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript?.trim();
      if (!transcript) {
        onError?.("empty");
        return;
      }
      onResult?.(transcript);
    };

    recognition.onerror = (event) => {
      // Common codes: "not-allowed" (mic permission denied), "no-speech",
      // "audio-capture" (no mic found), "network", "aborted".
      onError?.(event?.error || "unknown");
    };

    recognition.onend = () => {
      setListening(false);
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;
    try {
      recognition.start();
    } catch {
      setListening(false);
      onError?.("start-failed");
    }
  }, [RecognitionCtor, recognitionSupported, listening, onResult, onError]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch { /* ignore */ }
    }
    setListening(false);
  }, []);

  const speak = useCallback((text) => {
    if (!speechSupported || !voiceOutputEnabled || !text) {
      onSpeechEnd?.();
      return;
    }
    try {
      window.speechSynthesis.cancel(); // never overlap utterances
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.onstart = () => onSpeechStart?.();
      utterance.onend = () => onSpeechEnd?.();
      utterance.onerror = () => onSpeechEnd?.();
      window.speechSynthesis.speak(utterance);
    } catch {
      onSpeechEnd?.();
    }
  }, [speechSupported, voiceOutputEnabled, onSpeechStart, onSpeechEnd]);

  const cancelSpeaking = useCallback(() => {
    if (speechSupported) {
      try { window.speechSynthesis.cancel(); } catch { /* ignore */ }
    }
  }, [speechSupported]);

  return {
    recognitionSupported,
    speechSupported,
    listening,
    startListening,
    stopListening,
    speak,
    cancelSpeaking,
    voiceOutputEnabled,
    setVoiceOutputEnabled
  };
}
