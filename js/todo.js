const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");

function handlerAddList(event) {
    event.preventDefault();
}

addBtn.addEventListener("click", handlerAddList);