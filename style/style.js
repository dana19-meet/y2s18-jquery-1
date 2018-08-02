// Write all your JavaScript and JQuery code in this file! :)

var x = 0; // rotation of X
var y = 0; // rotation of Y
var z = 0; // rotation of Z

function updateSize(newSize) {
	$("img").eq(0).css("width",newSize)
}

function updateRotation() {
	$("img").eq(0).css("transform","rotateX("+x.toString()+"deg) rotateY("+y.toString()+"deg) rotateZ("+z.toString()+"deg)")
	// $("img").eq(0).css("transform","rotateY("+y.toString()+"deg)")
	// $("img").eq(0).css("transform","rotateZ("+z.toString()+"deg)")
}

function updateXRotation(newX) {
  x = newX;
  updateRotation();
}

function updateYRotation(newY) {
  y = newY;
  updateRotation();
}

function updateZRotation(newZ) {
  z = newZ;
  updateRotation();
}