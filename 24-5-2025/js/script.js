const tasksForm = document.querySelector(".tasks-form");

const allTask = [];

tasksForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskNameInput = document.querySelector(".task-name").value;
  const taskDescInput = document.querySelector(".task-desc").value;

  const taskObj = {
    taskName: taskNameInput,
    taskDesc: taskDescInput,
  };

  allTask.push(taskObj);

  renderTasks();
  document.querySelector(".task-name").value = "";
  document.querySelector(".task-desc").value = "";
});

function renderTasks() {
  let tasks = document.querySelector(".tasks");
  tasks.innerHTML = "";
  for (let i = 0; i < allTask.length; i++) {
    tasks.innerHTML += `
            <div class="task border border-3 rounded border-danger p-3 my-2">
                <p class="text-primary fs-4 p-2">${allTask[i].taskName}</p>
                <p class="text-warning fs-4 p-2">${allTask[i].taskDesc}</p>
            </div>
        `;
  }
}
