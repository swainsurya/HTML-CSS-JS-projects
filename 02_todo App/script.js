let todoInput = document.querySelector(".todotxt");
let addbtn = document.querySelector(".addbtn");
let container = document.querySelector(".container");
let item = document.querySelector(".todoItem");

let todos = [];
let dlt = document.createElement("button");

let addingTodo = () => {
    if (todoInput.value == "") {
        alert("Please Enter Todo");
    }
    else {
        let check = confirm("Are you sure to add this?");
        if (check == true) {
            todos.push({
                name: todoInput.value,
                id: Date.now()
            });
            let n = todos.length - 1;
            let ele = document.createElement('div');
            ele.classList.add("todoItem");
            ele.innerHTML = `
            <input type="text" value="${todos[n].name}" readonly class="todoname">
            <div class = "allBtn">
            <span class="deletebtn material-symbols-outlined" id="${todos[n].id}" onClick = "deleteClick(${todos[n].id})">Delete</span>
            <span class="deletebtn material-symbols-outlined" id="${todos[n].id + 1}"  onclick="editClick(${todos[n].id + 1})">edit</span>
            <span class="deletebtn material-symbols-outlined" id="${todos[n].id + 2}" onclick="doneClick(${todos[n].id + 2})">check_circle</span>
            </div>`;
            container.appendChild(ele);
            todoInput.value = "";
        }
        else {
            // do nothing
        }
    }
}

addbtn.addEventListener("click", addingTodo);

let deleteClick = (id) => {
    let element = document.getElementById(`${id}`);
    element.parentElement.parentElement.remove();
}

let isEdit = false;
let editClick = (id) => {
    if (isEdit == false) {
        let element = document.getElementById(`${id}`);
        element.parentElement.previousElementSibling.removeAttribute("readonly");
        element.innerHTML = `<span class="material-symbols-outlined deletebtn">
        save
        </span>`
        isEdit = true;
    }
    else {
        let element = document.getElementById(`${id}`);
        element.parentElement.previousElementSibling.setAttribute("readonly", "true");
        element.innerHTML = `<span class="material-symbols-outlined deletebtn">
        edit
        </span>`
        isEdit = false;
    }
}

let isDone = false;
let doneClick = (id) => {
    if (isDone == false) {
        let element = document.getElementById(`${id}`);
        element.parentElement.previousElementSibling.style.textDecoration = "line-through";
        element.innerHTML = `<span class="material-symbols-outlined deletebtn">
        close
        </span>`
        isDone = true;
    }
    else {
        let element = document.getElementById(`${id}`);
        element.parentElement.previousElementSibling.style.textDecoration = "none";
        element.innerHTML = `<span class="material-symbols-outlined deletebtn">
        check_circle
        </span>`
        isDone = false;
    }
}