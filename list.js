
var addtocontainer = document.getElementById("todos")
var addelement=document.querySelector(".todo_input");
var addbtn = document.querySelector(".add-item");
var deletebtn = document.querySelector(".deleteBtn");

addbtn.addEventListener("click",function(){

/* element related to to-do-list which are added*/

if(addelement.value.trim()){
    /* ul - tag */
    var ultag = document.createElement('ul');
    ultag.classList.add('todo-list-container');

    /* Todo list div */
    var todoList = document.createElement('div');
    todoList.classList.add('todo-list');

    /* li - tag */
    var litag = document.createElement('li');
    litag.innerText = addelement.value;
    litag.classList.add('todo-item');

    /* Button Div */
    var buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button');

    /* completed button */
    var completebtn = document.createElement('button');
    completebtn.classList.add('completed');
    completebtn.innerHTML = '<i class="fas fa-check"></i>';

    /* Edit Button */
    var editbtn = document.createElement('button');
    editbtn.classList.add('editBtn');
    editbtn.innerHTML = '<i class="far fa-edit"></i>';
    
    /* edit the task */
    editbtn.onclick = function(){
        edittask(litag);
    }

    /* delete button */
    var delbtn = document.createElement('button');
    delbtn.classList.add('trash');
    delbtn.innerHTML = '<i class="fas fa-trash"></i>';
    
    delbtn.onclick = function()
    {
        confirm("Are you sure to delete the task ?");
    }
 

    /* append all element according to related parents */
    ultag.appendChild(todoList);
    todoList.appendChild(litag);
    todoList.appendChild(buttonDiv);
    buttonDiv.appendChild(completebtn);
    buttonDiv.appendChild(editbtn);
    buttonDiv.appendChild(delbtn);
   
    /* append all element(ul-tag) with main container */
    addtocontainer.appendChild(ultag);

     /* completed btn  */
     todoList.addEventListener('click',function(s){
        var selectbtn = s.target;
        if(selectbtn.classList[0]==='completed')
        {
            var ft1 = selectbtn.parentElement;
            var ft2 = ft1.parentElement;
            ft2.classList.add('linethrough');

        }
        else if(selectbtn.classList[0]==='trash')
        {
            var ft1_li = selectbtn.parentElement;
            var ft2_cont = ft1_li.parentElement;
            var ft3_ul = ft2_cont.parentElement;
            ft3_ul.classList.add('delbtn');
            ft3_ul.addEventListener('transitionend', function(){
                ft3_ul.remove();
            });

        }
     })
    

/*after adding task erase input bar */
addelement.value = '';
}

else if(addelement.value === '')
{
    alert("You cannot add a task without filing it.")
}


})


function edittask(e){
    var editValue = prompt('Edit the selected task', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}
function deleteAllElements(){
    var getultag = document.querySelectorAll('.todo-list-container');
    
    for(var i = 0; i < getultag.length; i++){
    getultag[i].remove();
    }
}