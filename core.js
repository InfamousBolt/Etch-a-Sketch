const v = prompt("Enter grid number:")


function changeColor(e){
e.target.style.backgroundColor="black";

}

function grid(v){


  for (var i = 0; i <v**2 ; i++) {
    var row = document.createElement("div");
    row.classList.add('cells');
    document.documentElement.style.setProperty('--rowNum', v);
    document.documentElement.style.setProperty('--colNum', v);
    row.style.width=450/v + "px";
    row.style.height=450/v + "px";
    row.addEventListener('mouseover',changeColor);

  container.appendChild(row);
}

}
var btn=document.querySelector('.create');
btn.addEventListener('click',grid(v));
