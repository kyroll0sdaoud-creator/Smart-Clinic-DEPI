/**
 * AuthServices.js
 *
 * The original project didn't have a real login/auth flow yet — the old
 * Axios setup only *read* a token from localStorage to attach it to
 * requests. This file keeps that same simple idea, written in plain
 * beginner-friendly functions instead of an Axios interceptor.
 *
 * When a real backend is ready, replace the body of `login` with an
 * actual fetch() call to your login endpoint.
 */

const TOKEN_KEY = 'authToken';

// Save the token after a successful login.
export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

// Read the saved token (or null if the user isn't logged in).
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

// Remove the token (logout).
export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

// Simple check used to guard pages/routes later on.
export function isLoggedIn() {
  return Boolean(getToken());
}

// Placeholder login function — replace the fake part with a real
// fetch() call once the backend login endpoint exists.
export async function login(email, password) {
  // Example of what the real version will look like:
  // const response = await fetch(`${API_BASE_URL}/auth/login`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email, password }),
  // });
  // const data = await response.json();
  // saveToken(data.token);
  // return data;

  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeToken = 'fake-token-for-now';
      saveToken(fakeToken);
      resolve({ email, token: fakeToken });
    }, 400);
  });
}

// Simple logout helper.
export function logout() {
  clearToken();
}
