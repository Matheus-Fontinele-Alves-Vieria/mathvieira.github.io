let input = document.getElementById("input");
let button = document.getElementById("button-inserir");
let ul = document.getElementById("items");
let itemRemoveButton = document.getElementsByClassName("removeElement");

function createElement() {
  let li = document.createElement("li");

  let xButton = document.createElement("button");
  
  xButton.innerHTML = "X";
  xButton.className = "removeElement";
  
  li.appendChild(xButton);
  
  let element = document.createTextNode(input.value);
  
  li.appendChild(element);
  
  ul.appendChild(li);
  
  input.value = "";

  buttonRemoveElements()
}

button.addEventListener("click", createElement);

function deleteElement() {
  this.parentElement.remove();
}

function buttonRemoveElements() {
  for (let index = 0; index < itemRemoveButton.length; index++) {
    itemRemoveButton[index].addEventListener("click", deleteElement);
  }
}

buttonRemoveElements();