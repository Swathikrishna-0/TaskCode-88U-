var modal = document.getElementById("addressModal");
var btn = document.getElementById("addressBtn");

var span = document.getElementsByClassName("close")[0];

let inputPincode = document.getElementById("inputPincode");


var inputVillage = document.getElementById("inputVillage");

btn.onclick = function(){
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}

function openVillageinput (event){
	if (event.key === "Enter"){
		inputPincode.classList.add("d-none");
		inputVillage.classList.remove("d-none");
	}
}

inputPincode.addEventListener("keydown",openVillageinput);