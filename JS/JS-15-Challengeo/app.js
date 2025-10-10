"use strict";

// app.js
const API = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const statusEl = document.getElementById("status");
const newBtn = document.getElementById("newQuote");
const copyBtn = document.getElementById("copy");
const tweetBtn = document.getElementById("tweet");
const quoteFrame = document.getElementById("quoteFrame");

let controller = null;

async function fetchQuote() {
  // abort previous
  if (controller) controller.abort();
  controller = new AbortController();

  setLoading(true);
  try {
    const res = await fetch(API, { signal: controller.signal });
    if (!res.ok) throw new Error("Bad response");
    const data = await res.json();
    showQuote(data.content, data.author);
    setStatus("");
  } catch (err) {
    if (err.name === "AbortError") return;
    console.error(err);
    showQuote("Could not load quote. Try again.", "");
    setStatus('<span style="color:#ffb4b4">Network error — try again</span>');
  } finally {
    setLoading(false);
  }
}

function showQuote(text, author) {
  // small fade animation
  if (quoteFrame?.animate) {
    quoteFrame.animate(
      [
        { opacity: 0.2, transform: "translateY(6px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 260, easing: "ease-out" }
    );
  }
  quoteEl.textContent = `\"${text}\"`;
  authorEl.textContent = author ? `— ${author}` : "";
}

function setLoading(isLoading) {
  newBtn.disabled = isLoading;
  copyBtn.disabled = isLoading || !quoteEl.textContent.trim();
  tweetBtn.disabled = isLoading || !quoteEl.textContent.trim();
  if (isLoading) {
    statusEl.innerHTML =
      '<div style="display:inline-flex;gap:8px;align-items:center"><span class="loader" aria-hidden="true"></span><span>Loading…</span></div>';
  } else {
    if (!statusEl.dataset.persistent) statusEl.innerHTML = "";
  }
}

function setStatus(html) {
  statusEl.dataset.persistent = html ? "1" : "";
  statusEl.innerHTML = html || "";
}

// copy
copyBtn.addEventListener("click", async () => {
  const text =
    quoteEl.textContent +
    (authorEl.textContent ? " " + authorEl.textContent : "");
  try {
    await navigator.clipboard.writeText(text);
    setStatus('<span style="color:var(--accent-2)">Copied ✓</span>');
    setTimeout(() => {
      if (statusEl.dataset.persistent) return;
      setStatus("");
    }, 1400);
  } catch (e) {
    setStatus(
      '<span style="color:#ffb4b4">Could not copy automatically. Select & copy.</span>'
    );
  }
});

// tweet
tweetBtn.addEventListener("click", () => {
  const text =
    quoteEl.textContent +
    (authorEl.textContent ? " " + authorEl.textContent : "");
  const url =
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
  window.open(url, "_blank", "noopener");
});

// new quote
newBtn.addEventListener("click", fetchQuote);

// keyboard support
[newBtn, copyBtn, tweetBtn].forEach((b) =>
  b.addEventListener("keyup", (e) => {
    if (e.key === "Enter" || e.key === " ") b.click();
  })
);

// initial fetch
window.addEventListener("DOMContentLoaded", fetchQuote);
