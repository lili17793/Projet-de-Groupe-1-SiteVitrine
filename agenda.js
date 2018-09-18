//document.getElementById('open-close-button').addEventListener("click", changeIcon);

// const changeIcon = () => {
//   if (document.getElementById('button-content').className == "fa fa-chevron-down"){
//     document.getElementById('button-content').className = "fa fa-chevron-up";
//   } else if (document.getElementById('button-content').className == "fa fa-chevron-up") {
//     document.getElementById('button-content').className = "fa fa-chevron-down";
//   }
// }

// $("#open-close-button").click(function() {
//   $('html, body').animate({
//     scrollTop: $("#open-close-button").offset().top
//   }, 1500);
// });

// document.getElementById('open-close-button').addEventListener("click", fCollapse());

// const fCollapse = () => {

// };


//$('#open-close-button').on('show.bs.collapse', () => {


const hideSupplMonth = () => {
  const arrMonth = $(".month");
  for (let i=2; i<arrMonth.length; i++) {
      arrMonth[i].style.display = 'none';
      arrMonth[i].classList.add('hide');
  };
};

$(window).on("load", function() {
  const arrMonth = $(".month");
  if (arrMonth.length > 2) {
    hideSupplMonth();
  } else {
    $('#arrow')[0].style.display = 'none'
  };


});

const fScrollTo = (iIntPosition) => {
  window.scroll({
    top: iIntPosition,
    behavior:'smooth'
  })
};


const fExpand = () => {

  let arrMonth = $(".month.hide");

  if (arrMonth.length === 0) {

    $('#arrow')[0].className = "fa fa-angle-down";

    hideSupplMonth();

  } else {

    const intEnd = arrMonth.length > 1 ? 2 : 1;
    const intTop = $('.container-arrow').offset().top;
    
    for (let i=0; i<intEnd; i++) {

      arrMonth[i].style.display = 'block';
      arrMonth[i].classList.remove('hide');
      
    };

    fScrollTo(intTop);

    if (arrMonth.length < 3) {
      $('#arrow')[0].className = "fa fa-angle-up";
    };

  };

};




// const changeIcon = () => {
//   if (document.getElementById('button-content').className == "fa fa-chevron-down"){
//     document.getElementById('button-content').className = "fa fa-chevron-up";
//   } else if (document.getElementById('button-content').className == "fa fa-chevron-up") {
//     document.getElementById('button-content').className = "fa fa-chevron-down";
//   }
// }





// const fCollapse = () => {

// //const fCollapse = () => {
  
//   console.log('hihi');

//   let arrMonth = $(".month");
//   let arrMonthCollapsed = $(".month.collapse");

//   if (arrMonthCollapsed.length === 0) {

//   } else if (arrMonthCollapsed.length > 2){
    
//     console.log('haha');

//     for (let i=2; i<arrMonthCollapsed.length; i++) {

//       $('#bla').collapse('hide');


//       // arrMonthCollapsed[0].collapse({
//       //   toggle: false
//       // });
//     };

//   };

// };

// document.getElementById('open-close-button').addEventListener("click", fCollapse);



// const fCollapse = () => {
  
//   console.log('hihi');

//   let arrMonth = $(".month");
//   let arrMonthCollapsed = $(".month.collapse");

//   if (arrMonthCollapsed.length === 0) {

//   } else  if (arrMonthCollapsed.length > 2){
//     c
//     onsole.log('haha');

//     for (let i=2; i<arrMonthCollapsed.length; i++) {
//       $arrMonthCollapsed[0].collapse({
//         toggle: false
//       });
//     };

//   };

//};




// $("#open-close-button").click(() => {
//   $('html, body').animate({
//     scrollTop: $("#open-close-button").offset().top
//   }, 1500);
// });