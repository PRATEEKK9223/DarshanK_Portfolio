
// .............................About Me section .................................................
let education =document.querySelector (".Education");
let experience =document.querySelector (".Experience");  
let skill=document.querySelector (".Skills");

let ul=document.querySelectorAll(".sec li");

education.style.display="block";
experience.style.display="none";
skill.style.display="none";
ul[0].addEventListener("click",function(){
    education.style.display="block";
    experience.style.display="none";
    skill.style.display="none";
});

ul[1].addEventListener("click",function(){
    education.style.display="none";
    experience.style.display="block";
    skill.style.display="none";
});
ul[2].addEventListener("click",function(){
    education.style.display="none";
    experience.style.display="none";
    skill.style.display="block";
});


// ----------------------------------------Mode change-----------------------------------

let mode =document.getElementById("sun");

let dark=true;
mode.addEventListener("click",function(){
    if(dark){
       
        document.body.classList.add("bg-white","text-black");
        document.body.classList.remove("bg-black","text-white");
        dark=false;
    }else{
        document.body.classList.remove("bg-white","text-black");
        document.body.classList.add("bg-black","text-white");
        dark=true;
    }
});


// -----------------------------------Menu Bar-----------------------------------

let menu =document.querySelector("#menu");
let nav=document.querySelector("nav ul");
console.log(nav);

// function Menu(){
//     nav.classList.remove("hidden");
//     nav.style.position="absolute";
//     nav.style.right="0";
//     nav.style.top="100px";
//     nav.style.backgroundColor="orange";
//     nav.style.display="flex";
//     nav.style.flexDirection="column";
//     nav.style.gap="10px";
//     nav.style.padding="10px";
// }

function Menu(){
    nav.classList.remove("hidden");
    nav.classList.add("absolute","right-0","top-24","bg-orange-500","flex","flex-col","gap-2","p-2");
}


let clicked=false;

menu.addEventListener("click",function(){
   if(!clicked){
        Menu();
        clicked=true;
   }else{
        nav.classList.add("hidden");
        nav.style.display = "";
        clicked=false;
         nav.classList.remove("absolute", "right-0", "top-24", "bg-orange-500", "flex", "flex-col", "gap-2", "p-2");
   }

});


