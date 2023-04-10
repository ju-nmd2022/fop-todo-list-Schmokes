const taskListElement = document.getElementById("taskList");
const addTaskElement = document.getElementById("addTask");
const inputElement = document.getElementById("inputField");

//string the data in an array?
let taskList = [];
let taskName = inputElement.value;
addTaskElement.addEventListener("click", addTaskToList);

function addTaskToList() {
  /* taskListElement.innerHTML = ""; */

  if (inputElement.value.length > 0) {
    /*  taskList.push(taskName);
    localStorage.setItem("Tasks", JSON.stringify(taskList)); */
    createTask();
    console.log("click works");
  }
}

function createTask() {
  /* <div class="designTask">
          <p>⚪</p>
          <p>❌</p>
          <span>Task</span>
        </div> */
  console.log("in create task");
  const divElement = document.createElement("div");
  divElement.classList.add("designTask");
  taskListElement.appendChild(divElement);
  console.log("div element");
  let taskDone = false;
  const checkmarkElement = document.createElement("p");
  checkmarkElement.innerText = "⚪";

  //marking the task as done
  checkmarkElement.addEventListener("click", () => {
    if (taskDone === false) {
      checkmarkElement.innerText = "🌸";
      taskDone = true;
    } else if (taskDone === true) {
      checkmarkElement.innerText = "⚪";
      taskDone = false;
    }
  });
  divElement.appendChild(checkmarkElement);
  console.log("checkmark element");
  const removeElement = document.createElement("p");
  removeElement.innerText = "❌";
  divElement.appendChild(removeElement);
  console.log("remove element");
  const storedTasksJSON = localStorage.getItem("Tasks");
  const storedTasks = JSON.parse(storedTasksJSON);

  const taskNameElement = document.createElement("span");
  taskNameElement.innerText = inputElement.value;
  console.log(inputElement.value);
  divElement.appendChild(taskNameElement);

  //function for removing the task
}
