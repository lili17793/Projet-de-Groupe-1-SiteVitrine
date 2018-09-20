//Function hiding and changing the classes of the other divs .month if there are more than 2
const fHideSupplMonth = () => {
  const arrMonth = $(".month");
  for (let i=2; i<arrMonth.length; i++) {
      //hide
      arrMonth[i].style.display = 'none';
      //modify the class
      arrMonth[i].classList.add('hide');
  }
};


// //When the window is loaded
// $(window).on("load", function() {
//   //display the 2 first months

//   //get all the .month divs
//   const arrMonth = $(".month");
//   if (arrMonth.length > 2) {
//     //if there are more than 2, hide all the months except for the 2 first ones
//     fHideSupplMonth();
//   } else {
//     //if there are 2 or less, no need to display the arrow that allow the visualization of the others
//     $('#arrow')[0].style.display = 'none'
//   }


// });

//Function allowing to scroll the window untill a given position
const fScrollTo = (iIntPosition) => {
  window.scroll({
    top: iIntPosition,
    behavior:'smooth'
  })
};

//Function allowing to show more months in the window (activate when cliking on the arrow)
const fExpand = () => {

  //get all the .month.hide divs
  let arrMonth = $(".month.hide");

  if (arrMonth.length === 0) {
    //if there are none, reverse the direction of the arrow
    $('#arrow')[0].className = "fa fa-angle-down";
    //hide all the months except for the 2 first ones
    fHideSupplMonth();
  } else {
    //if there is at least one, check if there is 1 or more
    const intEnd = arrMonth.length > 1 ? 2 : 1;
    //get the position of the arrow
    const intTop = $('.container-arrow').offset().top;
    //display the first 2 .month.hide (or just one if there was just one left)
    for (let i=0; i<intEnd; i++) {
      //display
      arrMonth[i].style.display = 'block';
      //modify the class
      arrMonth[i].classList.remove('hide'); 
    }

    //scroll the window to an other position
    fScrollTo(intTop);

    //if there are no month div hidden anymore, reverse the direction of the arrow
    if (arrMonth.length < 3) {
      $('#arrow')[0].className = "fa fa-angle-up";
    }

  }

}


