const taskListElement = document.getElementById("taskList");
const addTaskElement = document.getElementById("addTask");
const inputElement = document.getElementById("inputField");

//string the data in an array?
let taskList = [];

addTaskElement.addEventListener("click", addTaskToList);

function addTaskToList() {
  /* taskListElement.innerHTML = ""; */
  let taskName = inputElement.value;
  inputElement.value = "";
  console.log(taskName);
  if (taskName.length > 0) {
    /*  taskList.push(taskName);
    localStorage.setItem("Tasks", JSON.stringify(taskList)); */
    createTask(taskName);
    console.log("click works");
  }
}

function createTask(taskName) {
  /* <div class="designTask">
          <p>⚪</p>
          <p>❌</p>
          <span>Task</span>
        </div> */
  console.log("in create task");
  const divElement = document.createElement("div");
  divElement.classList.add("designTask");
  //the next line of code is from https://stackoverflow.com/questions/3231459/how-can-i-create-unique-ids-with-javascript
  divElement.id = new Date().getTime();
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
  //function to remove the task
  removeElement.addEventListener("click", () => {
    console.log(removeElement.parentNode.id);
    const divElementId = document.getElementById(removeElement.parentNode.id);
    divElement.parentNode.removeChild(divElementId);
  });
  divElement.appendChild(removeElement);
  console.log("remove element");

  const storedTasksJSON = localStorage.getItem("Tasks");
  const storedTasks = JSON.parse(storedTasksJSON);

  const taskNameElement = document.createElement("span");
  taskNameElement.innerText = taskName;

  divElement.appendChild(taskNameElement);

  //function for removing the task
}
