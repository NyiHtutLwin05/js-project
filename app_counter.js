const myBtn_1 = document.querySelector(".myBtn-1");
const myBtn_2 =document.querySelector(".myBtn-2");
const myBtn_3 = document.querySelector(".myBtn-3");
const myNumber = document.querySelector(".number");

let counterNum =0;
function ButtonThree(){
        counterNum ++;
    
      myNumber.textContent = counterNum;
};

myBtn_3.addEventListener("click",ButtonThree);

function buttonOne(){
    counterNum --;
    myNumber.textContent = counterNum;
}
myBtn_1.addEventListener("click", buttonOne);

function buttonTwo(){
     if(counterNum>0){
      myNumber.textContent = 0;
     }
}
myBtn_2.addEventListener("click",buttonTwo);