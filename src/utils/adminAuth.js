const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123"
};

export function loginAdmin(username, password) {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    const token = btoa(`${username}:${Date.now()}`);
    localStorage.setItem("adminToken", token);
    localStorage.setItem("adminUser", username);
    return { success: true, token };
  }
  return { success: false, error: "Invalid username or password" };
}

export function logoutAdmin() {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
}

export function isAdminLoggedIn() {
  return !!localStorage.getItem("adminToken");
}

export function getAdminUser() {
  return localStorage.getItem("adminUser");
}
