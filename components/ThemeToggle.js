import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { dark, toggle, ready } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      disabled={!ready}
    >
      <span aria-hidden>{dark ? "☀️" : "🌙"}</span>
      <span className="hidden sm:inline">
        {dark ? "Light" : "Dark"}
      </span>
    </button>
  );
}

export default ThemeToggle;
