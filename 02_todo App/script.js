let todoInput = document.querySelector(".todotxt");
let addbtn = document.querySelector(".addbtn");
let container = document.querySelector(".container");
let item = document.querySelector(".todoItem");

let todos = [];
let dlt = document.createElement("button");

let localEle = localStorage.getItem("name");

console.log("Working");
let localTodo = JSON.parse(localStorage.getItem("todo"));
console.log(typeof localTodo);
let localArr = Array.from(localTodo);

localArr.forEach(item => {
    console.log(item.name);
    let ele = document.createElement('div');
    ele.classList.add("todoItem");
    ele.innerHTML = `
            <input type="text" value="${item.name}" readonly class="todoname">
            <div class = "allBtn">
            <span class="deletebtn material-symbols-outlined" id="${item.id}" onClick = "deleteClick(${item.id})">Delete</span>
            <span class="deletebtn material-symbols-outlined" id="${item.id + 1}"  onclick="editClick(${item.id + 1})">edit</span>
            <span class="deletebtn material-symbols-outlined" id="${item.id + 2}" onclick="doneClick(${item.id + 2})">check_circle</span>
            </div>`;
    container.appendChild(ele);
})

let addingTodo = () => {
    if (todoInput.value == "") {
        alert("Please Enter Todo");
    }
    else {
        let check = confirm("Are you sure to add this?");
        if (check == true) {
            todos = [...todos, {
                name: todoInput.value,
                id: Date.now()
            }]
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

            // saving to local storage
            localStorage.setItem("todo", JSON.stringify(todos));
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
    let deletedArr = [] ;
    localArr.forEach(item => {
        if(id === item.id) {
            // do nothing
        }
        else {
            deletedArr.push(item) ;
        }
    })
    localArr = deletedArr ;
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