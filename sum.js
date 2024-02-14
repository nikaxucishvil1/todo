const tasks = [];

function setItems() {
  const button = document.querySelector("#button");
  const input = document.querySelector("#input");

  button.addEventListener("click", () => {
    if (input.value === "") {
      console.error("sums up");
    } else {
      const task = input.value.trim();
      tasks.push(task);
      const result = JSON.stringify(tasks);
      localStorage.setItem("tasks", result);
      input.value = "";
      getItem();
    }
  });
}

function getItem() {
  const ul = document.querySelector("ul");
  const data = JSON.parse(localStorage.getItem("tasks"));
  ul.innerHTML = "";
  data.forEach((datas, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${datas} <button id="delBtn" data-index="${index}">delete</button>`;
    ul.appendChild(li);
  });
  delItems();
}

function delItems() {
  const delbuttons = document.querySelectorAll("#delBtn");
  delbuttons.forEach((item) => {
    item.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      tasks.splice(index, 1);
      const result = JSON.stringify(tasks);
      localStorage.setItem("tasks", result);
      getItem();
    });
  });
}

setItems();
