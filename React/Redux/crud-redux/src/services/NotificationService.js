let notifyFn;

export const setNotifyHandler = (fn) => {
  notifyFn = fn;
};

// generic notify
export const notify = (message, type = "info") => {
  if (notifyFn) notifyFn(message, type);
};

// shortcut methods
export const notifySuccess = (msg) => notify(msg, "success");
export const notifyError = (msg) => notify(msg, "error");
export const notifyWarning = (msg) => notify(msg, "warning");
