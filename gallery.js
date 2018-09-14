document.getElementById('open-close-button').addEventListener("click", changeIcon);

function changeIcon(){
	if (document.getElementById('button-content').className == "fa fa-chevron-down"){
		document.getElementById('button-content').className = "fa fa-chevron-up";
	} else if (document.getElementById('button-content').className == "fa fa-chevron-up") {
		document.getElementById('button-content').className = "fa fa-chevron-down";
	}
}

$("#open-close-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#ancre").offset().top
    }, 1500);
});
