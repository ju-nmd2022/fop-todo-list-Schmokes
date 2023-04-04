const taskListElement = document.getElementById("taskList");

//string the data in an array?
let tasks = [];

function createTask() {
  /* <div class="taskStyle" id="taskList">
          <p>⚪</p>
          <p>❌</p>
          <span>Task</span>
        </div> */

  const checkmarkElement = document.createElement("p");
  checkmarkElement.innerText = "⚪";
  taskListElement.appendChild(checkmarkElement);

  const removeElement = document.createElement("p");
  removeElement.innerText = "❌";
  taskListElement.appendChild(removeElement);

  const taskNameElement = document.createElement("span");
  taskListElement.appendChild(taskListElement);

  //function for finishing a task
  //function for removing the task
}
