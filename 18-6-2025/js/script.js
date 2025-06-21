let tasks = document.getElementById("tasks-form");
let inputTask = document.getElementById("input-task");
let inputDesc = document.getElementById("input-desc");
let btn = document.getElementById("input-button");

let updateIndex = -1;

allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.addEventListener("DOMContentLoaded", () => {
  showData();
});
tasks.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputTask.value === "" || inputDesc.value === "") {
    alert("Fill The Fields");
    return;
  }
  let taskObj = {
    name: inputTask.value,
    desc: inputDesc.value,
  };
  if (updateIndex === -1) {
    allTasks.push(taskObj);
  } else {
    allTasks[updateIndex] = taskObj;
    updateIndex = -1;
    btn.innerHTML = "Add";
    btn.style.backgroundColor = "";
  }

  localStorage.setItem("tasks", JSON.stringify(allTasks));

  showData();
  inputTask.value = "";
  inputDesc.value = "";
});

function showData() {
  let showTasks = document.querySelector(".show-tasks");
  showTasks.innerHTML = "";
  allTasks.forEach((task, index) => {
    showTasks.innerHTML += `
         
            <tr class="text-center">
                <td>${index + 1}</td>
                <td>${task.name}</td>
                <td>${task.desc}</td>
                <td>  <button onclick="update(${index})" class="btn btn-info rounded-circle text-center"><i class="fa-solid fa-file-pen text-light  "></i> </button>     </td>
                <td>   <button onclick="Delete(${index})" class="btn btn-danger rounded-circle text-center"><i class="fa-solid fa-trash  "></i></button>   </td>
            </tr>
         
         `;
  });
}

function Delete(index) {
  allTasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(allTasks));
  showData();
}

function update(index) {
  inputTask.value = allTasks[index].name;
  inputDesc.value = allTasks[index].desc;

  btn.innerHTML = "Update";
  btn.style.backgroundColor = "green";

  updateIndex = index;
}
