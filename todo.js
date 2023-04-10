const taskListElement = document.getElementById("taskList");
const addTaskElement = document.getElementById("addTask");
const inputElement = document.getElementById("inputField");

let taskList = [];

readFromStorage(taskList);

//the following 2 lines of code are adapted from https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
addTaskElement.addEventListener("click", function () {
  addTaskToList("", inputElement.value, false, false);
});

function addTaskToList(id, taskName, complete, fromStorage) {
  inputElement.value = "";

  if (taskName.length > 0) {
    createTask(id, taskName, complete, fromStorage);
  }
}

function createTask(id, taskName, complete, fromStorage) {
  //outside div
  const divElement = document.createElement("div");
  divElement.classList.add("designTask");
  taskListElement.appendChild(divElement);
  //the next line of code is adapted from https://stackoverflow.com/questions/3231459/how-can-i-create-unique-ids-with-javascript
  if (id === "") {
    divElement.id = new Date().getTime();
  } else {
    divElement.id = id;
  }

  //checkmark element
  const checkmarkElement = document.createElement("p");
  checkmarkElement.innerText = "⚪";
  divElement.appendChild(checkmarkElement);

  //marking the task as done
  checkmarkElement.addEventListener("click", () => {
    if (complete === false) {
      checkmarkElement.innerText = "🌸";
      complete = true;
    } else if (complete === true) {
      checkmarkElement.innerText = "⚪";
      complete = false;
    }
  });

  //remove element
  const removeElement = document.createElement("p");
  removeElement.innerText = "❌";
  divElement.appendChild(removeElement);

  //function to remove the task
  removeElement.addEventListener("click", () => {
    const divElementToRemove = document.getElementById(
      removeElement.parentNode.id
    );
    divElement.parentNode.removeChild(divElementToRemove);
    removeFromStorage(divElementToRemove.id);
  });

  //Task name element
  const taskNameElement = document.createElement("span");
  taskNameElement.innerText = taskName;
  divElement.appendChild(taskNameElement);

  //object of the task for storing
  const divElementId = divElement.id;
  let task = {
    name: taskName,
    complete: complete,
    id: divElementId,
  };
  let taskStr = JSON.stringify(task);

  //checking if the element has already been stored
  if (fromStorage === false) {
    addToStorage(taskStr, divElementId);
  }
}

function addToStorage(taskStr, divElementId) {
  localStorage.setItem(divElementId, taskStr);
}

function readFromStorage(taskList) {
  //getting all the keys from localStorage, using the keys to get the items and then pushing the items to the taskList
  //the following 5 lines of code are adaped from https://stackoverflow.com/questions/46340004/localstorage-get-every-value-from-each-key
  let keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    taskList.push(localStorage.getItem(keys[i]));
  }
  //getting the information from the string to object and send it to the function to add to UI
  taskList.forEach((task) => {
    let jsonTask = JSON.parse(task);
    addTaskToList(jsonTask["id"], jsonTask["name"], jsonTask["complete"], true);
  });
}

function removeFromStorage(divElementId) {
  localStorage.removeItem(divElementId);
}
