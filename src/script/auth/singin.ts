const login = document.createElement("div");
login.setAttribute("id", "login");

login.innerHTML = `
  <h1>Sign In</h1>
  <input type="email" id="email" placeholder="Enter your email">
  <input type="password" id="password" placeholder="Enter your password">
  <button id="signIn">Sign In</button>
`;
export default login;
