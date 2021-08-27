let form = document.getElementById('form');

let items = [];

displayLocalStorage();

form.addEventListener('submit', function(e){
    e.preventDefault();
    let todoInput = document.getElementById('todo-input').value;
    if (todoInput === ""){
        alert('Please enter valid input!');
    }
    else {
        displayItems(todoInput);
        storeItem(todoInput);
        document.getElementById('todo-input').value = '';
        addDeleteFunction(todoInput);
    }
});
function storeItem(item){
    items.push(item);
    localStorage.setItem('item',JSON.stringify(items));
};
function displayItems(todoInput){
    let todoItem = document.createElement('li');
    
    todoItem.innerHTML = `${todoInput}<div class="delete-item">Delete</div>`;
    let todoList = document.querySelector('ul');
    todoList.appendChild(todoItem);
};

function displayLocalStorage(){
    let storage = localStorage.getItem('item');
    
    if (storage === null){
        items = [];
    } else {
        let storageParsed = JSON.parse(storage);
        storageParsed.forEach(function(storageItem){
            displayItems(storageItem);
        })
    };
};

function addDeleteFunction(todoInput){
    
    let deleteButton = document.querySelectorAll('.delete-item');
    
    deleteButton.forEach(function(button, index){
        button.addEventListener('click', function(e){
            console.log(e.path[1].childNodes);
           let deletedStorage = localStorage.getItem('item');
           let deletedStorageParsed = JSON.parse(deletedStorage);

                deletedStorageParsed.splice(index, 1);
                console.log(deletedStorageParsed);
                localStorage.setItem('item',JSON.stringify(deletedStorageParsed));
            if(deletedStorageParsed.length === 0){
                let todoList = document.querySelector('ul');
                todoList.innerHTML = '';
                let todoItem = document.createElement('li');
                todoItem.innerHTML = `No more todos!`;
                
                todoList.appendChild(todoItem);
                displayLocalStorage();
               
                
                

            } else {
                localStorage.setItem('item',JSON.stringify(deletedStorageParsed));
            }
            

        })
    })
}
