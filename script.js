

function toTop() {
	window.scroll({
  		top: 0,
  		left: 0,
  		behavior: 'smooth'
	});
}

document.getElementById('open-close-button1').addEventListener("click", changeIcon1);

function changeIcon1(){
	if (document.getElementById('button-content1').className == "fa fa-chevron-down"){
		document.getElementById('button-content1').className = "fa fa-chevron-up";
	} else if (document.getElementById('button-content1').className == "fa fa-chevron-up") {
		document.getElementById('button-content1').className = "fa fa-chevron-down";
	}
}

document.getElementById('open-close-button2').addEventListener("click", changeIcon2);

function changeIcon2(){
  if (document.getElementById('button-content2').className == "fa fa-chevron-down"){
    document.getElementById('button-content2').className = "fa fa-chevron-up";
  } else if (document.getElementById('button-content2').className == "fa fa-chevron-up") {
    document.getElementById('button-content2').className = "fa fa-chevron-down";
  }
}

document.getElementById('open-close-button3').addEventListener("click", changeIcon3);

function changeIcon3(){
  if (document.getElementById('button-content3').className == "fa fa-chevron-down"){
    document.getElementById('button-content3').className = "fa fa-chevron-up";
  } else if (document.getElementById('button-content3').className == "fa fa-chevron-up") {
    document.getElementById('button-content3').className = "fa fa-chevron-down";
  }
}

document.getElementById('open-close-button4').addEventListener("click", changeIcon4);

function changeIcon4(){
  if (document.getElementById('button-content4').className == "fa fa-chevron-down"){
    document.getElementById('button-content4').className = "fa fa-chevron-up";
  } else if (document.getElementById('button-content4').className == "fa fa-chevron-up") {
    document.getElementById('button-content4').className = "fa fa-chevron-down";
  }
}

document.getElementById('open-close-button5').addEventListener("click", changeIcon5);

function changeIcon5(){
  if (document.getElementById('button-content5').className == "fa fa-chevron-down"){
    document.getElementById('button-content5').className = "fa fa-chevron-up";
  } else if (document.getElementById('button-content5').className == "fa fa-chevron-up") {
    document.getElementById('button-content5').className = "fa fa-chevron-down";
  }
}

document.getElementById('open-close-button6').addEventListener("click", changeIcon6);

function changeIcon6(){
  if (document.getElementById('button-content6').className == "fa fa-chevron-down"){
    document.getElementById('button-content6').className = "fa fa-chevron-up";
  } else if (document.getElementById('button-content6').className == "fa fa-chevron-up") {
    document.getElementById('button-content6').className = "fa fa-chevron-down";
  }
}

document.getElementById('open-close-button7').addEventListener("click", changeIcon7);

function changeIcon7(){
  if (document.getElementById('button-content7').className == "fa fa-chevron-down"){
    document.getElementById('button-content7').className = "fa fa-chevron-up";
  } else if (document.getElementById('button-content7').className == "fa fa-chevron-up") {
    document.getElementById('button-content7').className = "fa fa-chevron-down";
  }
}

document.getElementById('open-close-button8').addEventListener("click", changeIcon8);

function changeIcon8(){
  if (document.getElementById('button-content8').className == "fa fa-chevron-down"){
    document.getElementById('button-content8').className = "fa fa-chevron-up";
  } else if (document.getElementById('button-content8').className == "fa fa-chevron-up") {
    document.getElementById('button-content8').className = "fa fa-chevron-down";
  }
}

$("#open-close-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#ancre").offset().top
    }, 1500);
});

document.getElementByClass('')

