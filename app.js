var addBtn = document.getElementById('add-btn');
var delBtn = document.getElementById('delete-btn');
var list = document.getElementById('todo-list');
var inputElement = document.getElementById('input');
var elementCount = list.childElementCount;


addBtn.addEventListener('click',()=>{
    var newListItem = document.createElement('li');
    newListItem.setAttribute('id','l' + (elementCount + 1) )
    console.log(newListItem.id);
    var input = inputElement.value; 
    console.log(input)
    if(input != '')  {
        elementCount += 1;
        var textNode = document.createTextNode(elementCount+'.  '+ input);
        newListItem.append(textNode);
        list.append(newListItem);    
    }else {
        alert('You should write something.')
    }
})

delBtn.addEventListener('click',()=>{
    var input = inputElement.value;
    if(elementCount == 0){
        alert("Your ToDo List is Empty.")
    } else if(input != '')  {
        var removeElement = document.getElementById('l' + input);
        removeElement.remove();
    } else {
        alert('Just enter the serial number of item to be deleted!')
    }
})
