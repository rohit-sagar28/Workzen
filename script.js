const todo =document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
let dragElement = null;


console.log(todo, progress, done);

const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        console.log("dragging" , e);
        dragElement = task;
    })
})

function addDragEventsOnColumn(column) {

      column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");

    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    })

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    column.addEventListener("drop", (e) => {
        e.preventDefault();
   
       
     console.log("dropped", dragElement , column);
     
    column.appendChild(dragElement);
    column.classList.remove("hover-over");
     

    })
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// modal related logic
const toggleModelBotton = document.querySelector("#toggle-modal");
const modalBg = document.querySelector(".modal.bg")
const modal = document.querySelector(".modal")

const addTaskButton = document.querySelector("#add-new-task")

toggleModelBotton.addEventListener("click", () =>{
    modal.classList.toggle("active")
})

modalBg.addEventListener("click", () => {
  modal.classList.remove("active")
})

addTaskButton.addEventListener("click", () => {

    const taskTittle = document.querySelector("#task-title-input").value
    const taskDesc = document.querySelector("#task-desc-input").value

    const div =document.createElement("div")

    div.classList.add("task")
    div.setAttribute("draggable" , "true")

    div.innerHTML = `
        <h2>${taskTittle}</h2>
        <p>${taskDesc}</p>
        <button>Delete</button>

        `

        
     todo.appendChild(div)

     div.addEventListener("drag" , (e) => {
        dragElement = div;
     })

     modal.classList.remove("active")

     
})


// modal related logic

let name1 = [1,2];
let name2 = [3,4];

let fullName = [...name1 ,...name2];
console.log(fullName);

