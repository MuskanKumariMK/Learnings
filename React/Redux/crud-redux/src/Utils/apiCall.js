import axios from "axios";
import { BASE_DOMAINS } from "./apiConfig.JS";
import { API_BASE } from "./enums/apiBase";
/**
 * Generic API call helper using Axios
 *
 * @param {Object} options
 * @param {string} options.url - API endpoint (relative to BASE_URL)
 * @param {string} [options.method="POST"] - HTTP method
 * @param {string} [options.base="SECURITY"] - Base API category (SECURITY | ADMIN | USER)
 * @param {Object} [options.body] - Request payload
 * @param {Function} [options.onSuccess] - Success callback
 * @param {Function} [options.onError] - Error callback
 * @param {Function} [options.setLoading] - Loading state setter
 * @param {Function} [options.notify] - Notification handler
 */
export async function apiCall({
  url,
  method = "POST",
  base = API_BASE.RES,
  body,
  headers = {},
  onSuccess,
  onError,
  setLoading,
  notify,
}) {
  try {
    if (setLoading) setLoading(true);
    const token = localStorage.getItem("authToken");
    const BASE_URL = BASE_DOMAINS[base];
    // console.log(BASE_URL);
    const isFormData = body instanceof FormData;
    if (!BASE_URL) throw new Error(`Unknown base path: ${base}`);
    const config = {
      method,
      url: BASE_URL + url,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        Authorization: token ? `Bearer ${token}` : "",
        ...headers,
      },
      data: body || undefined,
    };
    // console.log("Url", config.url);
    console.log("config data", config.data);
    console.log("Headers :", config.headers);
    // console.log("Url of the Endpoint :", config.url);
    let response;

    try {
      response = await axios(config);
      console.log("API Call Response:", response);
    } catch (error) {
      console.log("Error in API Call:", error);
      const data = error.response?.data || {};
      let errorMsg = data.message || error.message || "Something went wrong";

      if (data.data && typeof data.data === "string") {
        errorMsg += `: ${data.data}`;
      }

      throw new Error(errorMsg);
    }

    const data = response.data;

    if (data && data.success === false) {
      console.log(data.message);
      const errorMsg = data.message || "Something went wrong";
      throw new Error(errorMsg);
    }

    if (onSuccess) onSuccess(data);
    if (notify) notify("Success", "success");
    return data;
  } catch (error) {
    // console.error("API Call Error:", error);
    if (onError) onError(error);
    if (notify) notify(error.message, "error");
  } finally {
    if (setLoading) setLoading(false);
  }
}
