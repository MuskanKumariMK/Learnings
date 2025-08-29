// A tiny indirection layer so app code never imports the Provider directly.
let handler = (msg, opts = {}) => {
  // Safe no-op if provider not mounted yet
  console.warn("[toast] provider not ready:", msg, opts);
};

// Called by the provider to register the real renderer
export const setNotificationHandler = (fn) => {
  handler = fn;
};

// Generic notify
export const notify = (message, opts = {}) => handler(message, opts);

// Shorthands
export const toast = {
  success: (message, opts) => notify(message, { ...opts, type: "success" }),
  info: (message, opts) => notify(message, { ...opts, type: "info" }),
  warning: (message, opts) => notify(message, { ...opts, type: "warning" }),
  error: (message, opts) => notify(message, { ...opts, type: "error" }),
};
