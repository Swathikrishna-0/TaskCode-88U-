var modal = document.getElementById("addressModal");
var btn = document.getElementById("addressBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}


var input = document.getElementById("pincode");

new Awesomplete(input, {
	list: [
		{ label: "234234", value: "Andhra Pradesh" },
		{ label: "234576", value: "Tamil Nadu" },
		{ label: "987635", value: "Uttar pradesh" }
	]
});
new Awesomplete(inputReference, {
	minChars: 6,
	maxItems: 5,
});