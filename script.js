
const btn=document.getElementById("add-btn");
const inp=document.getElementById("todo-input");
const listContainer=document.getElementById("list-container");
function addlist(){
    if(inp.value===''){
        alert('Please enter a task');
    }else{
        let li =document.createElement('li');
        li.innerHTML=inp.value;
        listContainer.appendChild(li);
      
    listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       
    }
    inp.value='';
    saveData();
}

inp.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addList();
    }
});
    

listContainer.addEventListener("click",(e)=>{
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
   
  
    saveData();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList()