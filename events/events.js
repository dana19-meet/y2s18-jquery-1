// Write all your JavaScript and JQuery code in this file! :)
/* START PROVIDED CODE */
function randomX() {
  return Math.random() * $(window).width();
}

function randomY() {
  return Math.random() * $(window).height();
}
 
$("#moveButton").on("click", function () {
    $("#message").css("left",randomX()+"px");
    $("#message").css("top", randomY()+"px");
});