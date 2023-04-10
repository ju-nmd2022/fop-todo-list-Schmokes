const taskListElement = document.getElementById("taskList");
const addTaskElement = document.getElementById("addTask");
const inputElement = document.getElementById("inputField");

//string the data in an array?
let taskList = [];
readFromStorage();
addTaskElement.addEventListener("click", addTaskToList);

function addTaskToList() {
  /* taskListElement.innerHTML = ""; */
  let taskName = inputElement.value;
  inputElement.value = "";
  console.log(taskName);
  if (taskName.length > 0) {
    createTask(taskName);
  }
}

function createTask(taskName) {
  /* <div class="designTask">
          <p>⚪</p>
          <p>❌</p>
          <span>Task</span>
        </div> */

  const divElement = document.createElement("div");
  divElement.classList.add("designTask");
  //the next line of code is from https://stackoverflow.com/questions/3231459/how-can-i-create-unique-ids-with-javascript
  divElement.id = new Date().getTime();
  taskListElement.appendChild(divElement);

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

  const removeElement = document.createElement("p");
  removeElement.innerText = "❌";
  //function to remove the task
  removeElement.addEventListener("click", () => {
    console.log(removeElement.parentNode.id);
    const divElementToRemove = document.getElementById(removeElement.parentNode.id);
    divElement.parentNode.removeChild(divElementToRemove);
    removeFromStorage(divElementToRemove.id);
  });
  divElement.appendChild(removeElement);

  const storedTasksJSON = localStorage.getItem("Tasks");
  const storedTasks = JSON.parse(storedTasksJSON);

  const taskNameElement = document.createElement("span");
  taskNameElement.innerText = taskName;

  divElement.appendChild(taskNameElement);
  taskList.push(JSON.stringify(divElement));
  console.log(JSON.stringify(divElement));
  let task = {
    name: taskName,
    complete: taskDone
  };
  const divElementId = divElement.id;
  let taskStr = JSON.stringify(task);
  addToStorage(taskStr, divElementId);
}

function addToStorage(taskStr, divElementId) {
  localStorage.setItem(divElementId, taskStr);
}

function readFromStorage() {}

function removeFromStorage(divElementId) {
  localStorage.removeItem(divElementId);
}
