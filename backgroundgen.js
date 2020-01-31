var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.querySelector("body");

function changecolor(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	document.querySelector("h3").innerHTML="<span>linear-gradient(to right,"+color1.value+","+color2.value+")</span>";
}

color1.addEventListener("input",changecolor);
color2.addEventListener("input",changecolor);
