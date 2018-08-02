var no=0;
$("#counter").on("click", function () {
	no++;
	$("h1").eq(1).html(no);
})
$("#reset").on("click", function () {
	$("h1").eq(1).html(0);
})
