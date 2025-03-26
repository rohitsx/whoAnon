import login from "./auth/singin";

function main() {
  const container = document.querySelector("#app");
  const userEmail = localStorage.getItem("userEmail");

  if (!container) throw new Error("No container found");

  if (!userEmail) container.appendChild(login);
}

main();
