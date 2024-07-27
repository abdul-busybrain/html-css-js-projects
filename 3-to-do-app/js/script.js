"use strict";

// selecting elements
const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");

// initial task count
let taskCount = 0;

// functions
const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};

const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }

  const task = `<div class="task">
  <input type="checkbox" class="task-check">
  <span class="taskname">${taskName}</span>
  <button class="edit">edit</button>
  <button class="delete">delete</button>
  </div>`;

  tasksContainer.insertAdjacentHTML("beforeend", task);

  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach(function (btn) {
    btn.onclick = function () {
      btn.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });

  const editBtns = document.querySelectorAll(".edit");
  editBtns.forEach(function () {
    editBtns.onclick = function (event) {
      let targetElement = event.target;
      if (!(event.target.className === "edit")) {
        targetElement = event.target.parentElement;
      }

      newTaskInput.value = targetElement.previousElementSibling?.innerText;
      targetElement.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });

  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach(function (checkBox) {
    checkBox.onchange = function () {
      checkBox.nextElementSibling.classList.toggle("completed");
      if (checkBox.checked) {
        taskCount -= 1;
      } else {
        taskCount += 1;
      }
      displayCount(taskCount);
    };
  });
  taskCount += 1;
  displayCount(taskCount);
  newTaskInput.value = "";
};

addBtn.addEventListener("click", addTask);

window.onload = function () {
  taskCount = 0;
  displayCount(taskCount);
  newTaskInput.value = "";
};
