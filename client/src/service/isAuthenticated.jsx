export function isAuthenticated() {
  return localStorage.getItem("accessToken") ? true : false;
}
