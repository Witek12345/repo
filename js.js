// Zapisywac w tablicy wszystkie taski
// Renderowanie w liście
// Dodac usuwanie taskow za pomocą filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const tasks = [];

function handleButtonClick(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    const task = formData.get('name')
    const status = formData.get('status');

    const obj = { name: task, status: status };
    tasks.push(obj);

    event.target.reset();
}

// submit, click, input, change
document.querySelector('.add-task-form').addEventListener('submit', handleButtonClick)
