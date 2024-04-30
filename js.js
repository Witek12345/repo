// Zapisywac w tablicy wszystkie taski
// Renderowanie w liście
// Dodac usuwanie taskow za pomocą filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

let tasks = [];

function handleButtonClick(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    const task = formData.get('name');
    const status = formData.get('status');

    obj = {name: task, status: status};


    tasks.push(obj);

    const list = document.querySelector('.list');

    const li = document.createElement("li");
    li.textContent = "Name: " + task + ", Status: " + status;

    const btn = document.createElement("button");
    btn.textContent = "DEL";
    btn.addEventListener('click', function(){
        const newTask = tasks.filter(function(item) {
            return item.name !== task || item.status !== status;
    
        });
       li.innerHTML = "";
    });

    list.appendChild(li);
    li.appendChild(btn);


    console.log(tasks);

    event.target.reset();
}

document.querySelector('.add-task-form').addEventListener('submit', handleButtonClick)