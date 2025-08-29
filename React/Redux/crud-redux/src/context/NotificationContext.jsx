import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { setNotificationHandler } from "../services/notificationBus";
/**
 * NotificationContext
 * React Context for providing global notification (toast) functionality.
 * Allows any component in the app to trigger a notification message.
 */
const NotificationContext = createContext();

/**
 * NotificationProvider
 * Context provider that manages notification state and renders a Tailwind-styled toast.
 *
 * Features:
 * - Exposes a `notify` function to show messages of different severities.
 * - Renders a toast at the top-right of the screen.
 * - Handles auto-hide after 4 seconds and manual close.
 *
 * Usage:
 * // In your root component (e.g., App.js):
 * <NotificationProvider>
 *   <App />
 * </NotificationProvider>
 *
 * // In any child component:
 * const { notify } = useNotification();
 * notify("This is a message", "success");
 */
export const NotificationProvider = ({ children }) => {
  // Toast open/close state
  const [open, setOpen] = useState(false);
  // Message to display in the notification
  const [message, setMessage] = useState("");
  // Severity level: "success", "info", "warning", "error"
  const [severity, setSeverity] = useState("info");
  const [duration, setDuration] = useState(4000);
  const [timer, setTimer] = useState(null);
  /**
   * notify
   * Triggers a notification with the given message and severity.
   * @param {string} msg - The message to display.
   * @param {string} sev - The severity ("success", "info", "warning", "error").
   */
  const notify = useCallback(
    (msg, opts = {}) => {
      const { type = "info", autoHideDuration = 4000 } = opts;
      console.log("Message :", msg, "Type :", type);
      setMessage(msg);
      setSeverity(type);
      setDuration(autoHideDuration);
      setOpen(true);

      if (timer) clearTimeout(timer);
      const t = setTimeout(() => setOpen(false), autoHideDuration);
      setTimer(t);
    },
    [timer]
  );
  useEffect(() => {
    setNotificationHandler((msg, opts) => notify(msg, opts));
    return () => setNotificationHandler(() => {});
  }, [notify]);
  // Handles closing the toast manually
  const handleClose = () => setOpen(false);

  // Tailwind classes for different severities
  const severityClasses = {
    success: "bg-green-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      {open && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className={`px-4 py-3 rounded-lg shadow-lg flex items-center justify-between ${severityClasses[severity]}`}
          >
            <span>{message}</span>
            <button
              onClick={handleClose}
              className="ml-4 font-bold text-lg focus:outline-none"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};

/**
 * useNotification
 * Custom hook to access the notification context.
 * Throws an error if used outside of NotificationProvider.
 *
 * Usage:
 * const { notify } = useNotification();
 * notify("Message", "success");
 */
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
