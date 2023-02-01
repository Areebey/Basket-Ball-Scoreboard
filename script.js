let homeNum=document.getElementById("home-goal");
let homeCount=0;

let guestNum=document.getElementById("guest-goal");
let guestCount=0

function homeaddone(){
    homeCount +=1;
    homeNum.textContent=homeCount

}
function homeaddtwo(){
    homeCount +=2;
    homeNum.textContent=homeCount;
}
function homeaddthree(){
    homeCount +=3;
    homeNum.textContent=homeCount
}

function guestaddone(){
    guestCount +=1;
    guestNum.textContent=guestCount;
}
function guestaddtwo(){
    guestCount +=2;
    guestNum.textContent=guestCount;
}
function guestaddthree(){
    guestCount +=3;
    guestNum.textContent=guestCount;
}