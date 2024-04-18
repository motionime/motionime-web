"use client";

const isDocument = typeof document !== "undefined";

function getWidth() {
  if (!isDocument) return;

  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth,
  );
}

function getHeight() {
  if (!isDocument) return;

  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight,
  );
}

export { getHeight, getWidth };
