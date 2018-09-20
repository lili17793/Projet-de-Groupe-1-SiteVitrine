let boolNavbarIcon = true;

// Change icon navbar
function changeIconNavbar()
{
    if (boolNavbarIcon){
        document.getElementById('buttonNavBarPerso').src = "images/menuIconClose.svg";
        boolNavbarIcon=false;
    }
    else{
        document.getElementById('buttonNavBarPerso').src = "images/menuIcon.svg";
        boolNavbarIcon=true;
    }
}

document.getElementById('collapsible').onclick=changeIconNavbar;