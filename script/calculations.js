function calculateSpeed(){
	var distance=parseInt(document.getElementById("distance-speed").value);
	var speed=parseInt(document.getElementById("time-speed").value);
	var answer=distance/speed;
	document.getElementById('speed').value=answer;
}
function calculateDistance(){
	var speed=parseInt(document.getElementById("speed-distance").value);
	var time=parseInt(document.getElementById("time-distance").value)
	document.getElementById('distance').value=speed*time;
}
function calculateTime(){
	var distance=parseInt(document.getElementById("distance-time").value);
	var speed=parseInt(document.getElementById("speed-time").value)
	document.getElementById('time').value=distance/speed;
}