const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskSubmit = document.getElementById("taskSubmit");

taskSubmit.addEventListener("click", addTask);

function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") return; //  error

  console.log("task added");

  const li = document.createElement("li");
  li.textContent = taskValue;

  console.log("task added to the list");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("deleteButton");

  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();

    console.log("task deleted");
  });

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";

  console.log("you can finally see your tasks");
}
