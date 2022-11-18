var myNodeList = document.getElementsByTagName("LI");
console.log("myNodeList.length: " + myNodeList.length);

var i;
for(i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("");
  span.className = "close";
  span.appendChild(txt);
  
  myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for(i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(evt) {
  console.log("list clicked");
  if(evt.target.tagName === "LI") {
    evt.target.classList.toggle("checked");
  }
}, false);


function newElement() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var li = document.createElement("LI");
    li.style.background = bgColor
   
  var inputValue = document.getElementById("todo-input").value;
  var liText = document.createTextNode(inputValue);
  li.appendChild(liText);
  if(inputValue === "") {
    alert("You must write something!!!");
  }
  else {
    document.getElementById("my-ul").appendChild(li);
   
  }

  li.innerHTML = `
  ${inputValue}<div id="icons">
  <span class="material-symbols-outlined">done</span>
  <span class="material-symbols-outlined">
        delete</span>
</div>
    `
  
  document.getElementById("todo-input").value = ""
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "close";
  span.appendChild(txt);  
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";

    }
  }   

}

////////////
// var todo =[]
// if(window.localStorage.getItem("todo")){
//   todo = localStorage.getItem("todo")
//   keep()=>{
//     localStorage.setItem{"todo", todo}
//   }
// }