function Add(){

    const task = document.getElementById('name').value;
    const status = document.getElementById('status').value;
   
    const obj = {name: task, status: status};

    const tab = [ Object.values(obj)];
    
    console.log(tab);

    

}