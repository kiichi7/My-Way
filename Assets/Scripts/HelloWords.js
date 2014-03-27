#pragma strict
function Start () {

}

function Update () {

}

function OnGUI () {

	if (Time.time < 3) {
		GUI.Label(Rect(10,10,1920,30),"My Way by Peng Bi Tao");
	}
	else if (Time.time < 6) {
		GUI.Label(Rect(10,10,1920,30),"Find your way");
	}

}