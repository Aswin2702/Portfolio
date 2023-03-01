

var observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});


var hiddenObj = document.querySelectorAll(".hidden");

hiddenObj.forEach((el) => observer.observe(el));

var tabLink = document.getElementsByClassName("tabs");
var tabCont = document.getElementsByClassName("table-cont");

function opentab(tabNm) {
    for(tabl of tabLink){
        tabl.classList.remove("act-lin");
    }
    for(tabc of tabCont){
        tabc.classList.remove("act-tab");
    }
    event.currentTarget.classList.add("act-lin");
    document.getElementById(tabNm).classList.add("act-tab");
}

