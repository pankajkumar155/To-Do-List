var addButton = document.getElementById('add');
var toDos = document.getElementById('todos');
var inputfield = document.getElementById('inputsth');


addButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputfield.value;
    toDos.appendChild(paragraph);
    paragraph.style.fontWeight = "bold";
    inputfield.value = "";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
        paragraph.style.cursor = "pointer";
        paragraph.style.color = "rgba(44,41,41,0.7)";

    })
    paragraph.addEventListener('dblclick',function(){
        paragraph.style.display = "none";
  
});
    });
   
    var icon = document.getElementById("icon");
    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "dark theme icon/sun.png";
        }else{
            icon.src = "dark theme icon/moon.png";   
        }
    }
    
