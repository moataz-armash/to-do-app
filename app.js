let day = document.querySelector("p.left");
let month = document.querySelector("div.right .month");
let year = document.querySelector("div.right .year");
let dayName = document.querySelector("p.right-header");

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let today = new Date();
day.innerHTML = today.getDay();
month.innerHTML = today.toLocaleString("default", { month: "short" });
year.innerHTML = today.getFullYear();
dayName.innerHTML = today
  .toLocaleDateString("en-US", { weekday: "long" })
  .toLocaleUpperCase();

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function addTask() {
  if (inputBox.value === "") {
    alert("You must write anything!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
