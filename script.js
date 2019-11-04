var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var deg = document.querySelector("select");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient("+ deg.value+", " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

deg.addEventListener("input", setGradient)
//geeft de eerste random value aan de generator
function setRandom(){
	deg.value = "90deg";
	var clr1 = Math.floor(Math.random(999)*999999);
	var clr2 = Math.floor(Math.random(999)*999999);
	color1.value = "#"+clr1;
	console.log(color1.value);
	color2.value = "#"+clr2;
	console.log(color2.value);
	setGradient();
}
setRandom();