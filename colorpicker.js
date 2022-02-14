const colors=["green","red","yellow","rgba(133,122,200)"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',()=>{
    const randomNumber=getRandom();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber]

});

function getRandom(){
    return Math.floor(Math.random()*colors.length);
}