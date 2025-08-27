
// #zero
// #hundred
//#copy
//.love

const loveSign=document.getElementsByClassName("love");


for(const item of loveSign){
    item.addEventListener("click",(e)=>{
        let zero=document.getElementById("zero");
        let bigZero=parseInt(zero.innerText);
        zero.innerText=bigZero+1;
    })

}