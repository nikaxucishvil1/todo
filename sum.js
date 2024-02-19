
// sul iyopa 3 mtavar punqciad  (setItems getItem delItems)

const tasks = [];

function setItems() { // local storage shi shenaxvis punqcia
  const button = document.querySelector("#button");
  const input = document.querySelector("#input");

  button.addEventListener("click", () => {
    if (input.value === "") {
      console.error("sums up");
    } else {
      const task = input.value.trim();
      tasks.push(task);
      const result = JSON.stringify(tasks); // gadadis JSON enaze (stirngebi roa ra) da ise vinaxavt
      localStorage.setItem("tasks", result);
      input.value = ""; 
      getItem();    //aq tu ar gamovidzaxebt gveqneba error 
    }
  });
}

function getItem() { // wamogebis da gamochenis punqcia
  const ul = document.querySelector("ul");
  const data = JSON.parse(localStorage.getItem("tasks")); // mogvaq arrey magram radgan JSON is enazea unda gaparse o
  ul.innerHTML = ""; // amas tu ar dawer yovel axalis damatebaze winebs gaameorebs magalitad tu ukve gaq home da mere chawere table gamoitans 2 jer home da table
  data.forEach((datas, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${datas} <button id="delBtn" data-index="${index}">delete</button>`; // buttons vadzlevt atribut data-index es gexmareba rom washlis dros amoicnos romeli indexzea li da washalos
    ul.appendChild(li);
  });
  delItems();   // aq tu ar gamovidzaxebt gveqneba error radgan jer sheqmnili argvaq "li" tag
}

function delItems() { // washlis punqcia
  const delbuttons = document.querySelectorAll("#delBtn"); // delbuttons aris Arrey radgan yvela axal sheqmnaze igive id aqvt
  delbuttons.forEach((item) => {
    item.addEventListener("click", function () {
      const index = this.getAttribute("data-index"); // am midgomit vigebt ukve im 'li' tagis index
      tasks.splice(index, 1); // es mtavari arrey dan shlis chvens 'li tags'
      const result = JSON.stringify(tasks); // vanaxlebt Arrey is
      localStorage.setItem("tasks", result); // isev Local storage shi vinaxavt
      getItem(); // amas tu ar dawer arrey dan ki amoishleba elementi magram browsershi mainc geqneba tu ar daarefreshe
    });
  });
}

setItems();
document.body.addEventListener("DOMContentLoaded",setItems)
