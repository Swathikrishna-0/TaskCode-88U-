var modal = document.getElementById("addressModal");
var btn = document.getElementById("addressBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}
