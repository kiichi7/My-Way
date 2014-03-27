#pragma strict
var theWords : String;
private var ifShowWords : boolean;

function Start () {

}

function Update () {

}

function OnGUI () {

	if (ifShowWords) {
		GUI.Label(Rect(10,10,1920,30),theWords);
	}

}

function OnTriggerStay () {

	ifShowWords = true;
   
}

function OnTriggerExit () {

	ifShowWords = false;

}