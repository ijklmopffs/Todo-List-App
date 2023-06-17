const parentDiv = document.querySelector(".todo_list");
const todoInput = document.querySelector(".todo_input");
const labelOne = document.querySelector(".label_one");
const allLabelTwo = document.querySelectorAll(".label_two");
const todo = [];
const outputText = document.getElementById("outputText");
const allFirstOptions = document.querySelectorAll(".first_option");
const allTextOutput = document.querySelectorAll("#outputText");
const moon = document.querySelector(".moon");
const header = document.querySelector("header");
const body = document.querySelector("body");
const inputTodo = document.querySelector(".input_todo");
const allCheck = document.querySelectorAll(".check");
const countElement = document.getElementById("count");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const complete = document.querySelector(".complete");
const allLines = document.querySelectorAll(".line");
const clear = document.querySelector(".clear");
const middle = document.querySelector(".desk");
let isSun = false;

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submitInput();
  }
}

function submitInput() {
  const inputValue = todoInput.value;
  todoInput.value = "";

  const div = document.createElement("div");
  div.className = "first_option";

  const divOne = document.createElement("div");
  divOne.className = "one";

  const label = document.createElement("label");
  label.setAttribute("for", "input_one");
  label.className = "label_two";

  const image = document.createElement("img");
  image.src = "./images/icon-check.svg";
  image.alt = "";
  label.appendChild(image);

  const p = document.createElement("p");
  p.setAttribute("id", "outputText");
  p.textContent = inputValue;

  divOne.appendChild(label);
  divOne.appendChild(p);

  const image2 = document.createElement("img");
  image2.src = "./images/icon-cross.svg";
  image2.alt = "";
  image2.className = "mobile";

  div.appendChild(divOne);
  div.appendChild(image2);

  const lastChild = parentDiv.lastElementChild;

  const hr = document.createElement("hr");
  hr.className = "line";
  div.appendChild(hr);

  parentDiv.insertBefore(div, lastChild);
}

moon.addEventListener("click", () => {
  if (isSun) {
    moon.setAttribute("src", "./images/icon-moon.svg");
    isSun = false;
  } else {
    moon.setAttribute("src", "./images/icon-sun.svg");
    isSun = true;
  }
  header.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  inputTodo.classList.toggle("dark-mode");
  todoInput.classList.toggle("dark-mode");
  parentDiv.classList.toggle("dark-mode");
  allTextOutput.forEach((text) => {
    text.classList.toggle("dark-mode");
  });
  allCheck.forEach((check) => {
    check.classList.toggle("dark-mode");
  });
  middle.classList.toggle("dark-mode");
});

allLabelTwo.forEach((labelTwo) => {
  labelTwo.addEventListener("click", () => {
    labelTwo.classList.toggle("checked");
    // Get the parent div of the clicked label
    const parentDiv = labelTwo.parentNode;
    const image = parentDiv.querySelector("img");
    const parentDiv2 = labelTwo.closest(".first_option");
    parentDiv2.classList.toggle("clicked");

    image.classList.toggle("checked");
    // Get the text output element inside the parent div
    const textOutput = parentDiv.querySelector("p");
    textOutput.classList.toggle("checked");
  });
});

function updateCount() {
  const imageElements = parentDiv.querySelectorAll(
    ".first_option:not(.clicked)"
  );
  const imageCount = imageElements.length;
  countElement.textContent = `${imageCount} items left`;
}

updateCount();

active.addEventListener("click", () => {
  allFirstOptions.forEach((first) => {
    if (first.classList.contains("clicked")) {
      first.style.display = "none";
    } else {
      first.style.display = "";
    }
  });
});

complete.addEventListener("click", () => {
  allFirstOptions.forEach((first) => {
    if (!first.classList.contains("clicked")) {
      first.style.display = "none";
    } else {
      first.style.display = "";
    }
  });
});

all.addEventListener("click", () => {
  allFirstOptions.forEach((first) => {
    first.style.display = "";
  });
});

clear.addEventListener("click", () => {
  allFirstOptions.forEach((first) => {
    if (first.classList.contains("clicked")) {
      first.style.display = "none";
    }
  });
});
