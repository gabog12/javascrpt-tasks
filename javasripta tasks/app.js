document.getElementById('formTask').addEventListener('submit', saveTasks);
function saveTasks(e){
  let title = document.getElementById('title').value;
  let descripcion = document.getElementById('descripcion').value;
const task={
    title,
    descripcion
};

if (localStorage.getItem('tasks')===null){
  let tasks =[];
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
  }else{
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
 getTasks();
 document.getElementById('formTask').reset();
 e.preventDefault();



}
function getTasks() {
 let tasks = JSON.parse(localStorage.getItem('tasks'));
 let tasksView = document.getElementById('tasks');
  tasksView.innerHTML='';
  for (let i=0; i<tasks.length;i++){
    let title = tasks[i].title;
    let descripcion = tasks[i].descripcion;
    tasksView.innerHTML += `<div class="card mb-3">
      <div class="card-boby">
      <p>${title}-${descripcion} </p>
      <a class="btn btn-danger" onclick="deleteTask ('${title}')">
      Delete
      </a>
      
      </div>
    </div>`

  }
}
function deleteTask(title){
 let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i=0;i < tasks.length; i++){
    if (tasks[i].title == title){
      tasks.splice(i,1);
    }
  }
  localStorage.setItem('tasks',JSON.stringify(tasks));
  getTasks();
}

getTasks();