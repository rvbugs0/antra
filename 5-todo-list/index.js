function addToList(item) {
  const ul = document.getElementById("list");

  const li = document.createElement("li");
  li.textContent = item;

  const span = document.createElement("span");
  span.className = "close";
  span.textContent = "\u00D7";
  
  // Attach event listener to the close button
  span.addEventListener("click", function () {
    const div = this.parentElement;
    div.style.display = "none";
  });
  li.appendChild(span);
  ul.appendChild(li);


  li.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
}




function newElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    addToList(inputValue);
  }
  document.getElementById("myInput").value = "";
}


document.addEventListener("DOMContentLoaded", (event) => {
  getTodo("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((json) => {
      json.slice(0, 5).forEach((element) => addToList(element.title));
    })
    .catch((e) => console.error("Something went wrong with the API:", e));
});

function getTodo(url) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve({
          json: () => JSON.parse(xhttp.response),
        });
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}