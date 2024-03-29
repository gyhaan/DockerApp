const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  ul.innerHTML = "";
  tasks.forEach(function (task, index) {
    const html = `<li><input type="checkbox" ${
      task.status ? "checked" : ""
    }/><span style="text-decoration: ${task.status ? "line-through" : ""}">${
      task.name
    }</span><button>X</button></li>`;
    ul.insertAdjacentHTML("beforeend", html);
    ul.lastElementChild
      .querySelector('input[type="checkbox"]')
      .addEventListener("change", function () {
        task.status = !task.status;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
      });
    ul.lastElementChild
      .querySelector("button")
      .addEventListener("click", function () {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
      });
  });
}

button.addEventListener("click", function (e) {
  if (!input.value) return;
  tasks.push({ name: input.value, status: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  input.value = "";
});

renderTasks();
