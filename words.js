const words=["tiger","dolphin","monkey","office","trouble","ghost","america","phone","cricket","laptop"];
let playgame=false;

const display=document.querySelector("#display");
const input=document.querySelector("input");
const btn=document.querySelector("button");
let generateword;
let scrambledword;
let score=0;
btn.addEventListener("click",function(){
if(!playgame){
playgame=true;
btn.innerText="Guess";
score=0;
input.classList.toggle("hidden");
generateword=randomword();
let scramble=randomletter(generateword.split(""));
scrambledword=scramble.join("");
display.textContent=`Guess the word "${scrambledword}"`
display.style.cssText="border:1px black solid;width:40%;margin:1% auto;padding:1%;background-color:#4CA3DD;color:white;box-shadow:1px 1px black;"
input.value="";
}
else {
let guess=input.value;
score++;
if(guess===generateword) {
input.classList.toggle("hidden");
playgame=false;
display.textContent=`Correct!!The word was "${generateword}". You took ${score} Guesses`
display.style.cssText="border:1px white solid;width:40%;margin:1% auto;padding:1%;background-color:rgba(68, 213, 68, 0.64);color:white;box-shadow:1px 1px grey; font-size:150%;"
btn.innerText="Start";
}
else {
  console.log("try again")
}
}
})

function randomword(){
let random=Math.floor(Math.random()*words.length);
let ranword=words[random];
return ranword;
}

function randomletter(w){
for(let i=w.length-1;i>0;i--){
let temp=w[i];
let j=Math.floor(Math.random()*(i+1));
w[i]=w[j];
w[j]=temp;
}
return w;
}
