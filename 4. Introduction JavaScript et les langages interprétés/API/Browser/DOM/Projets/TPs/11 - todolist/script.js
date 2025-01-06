const form = document.querySelector("#form")
const nameList = document.querySelector("#todo");
//Static
//Event


form.addEventListener("submit",onSubmitAddTask);


function onSubmitAddTask(e){
    e.preventDefault()
    const listTasks = document.querySelector(".list-tasks");
    const task = `
        <div class="task">
        <p>${nameList.value}</p>
        <button class="btn-delete">
            <i class="fas fa-trash-alt"></i>
        </button>
        <button class="btn-archive">
            <i class="fas fa-check-circle"></i>
        </button>
        </div>
    `;

    listTasks.innerHTML += task;

    const btnsSupprimer = document.querySelectorAll(".btn-delete");
    btnsSupprimer.forEach((btn)=>{
        btn.addEventListener("click",function(){
            btn.parentElement.remove()
        });
    })

    

}