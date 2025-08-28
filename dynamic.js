
// #zero
// #hundred
//#copy
//.love
 
//love button
const loveSign=document.getElementsByClassName("love");


for(const item of loveSign){
    item.addEventListener("click",(e)=>{
        let zero=document.getElementById("zero");
        let bigZero=parseInt(zero.innerText);
        zero.innerText=bigZero+1;
    })
}

//call section
const call=document.getElementsByClassName("calling");

for(const item of call){

item.addEventListener("click",(e)=>{
      const coin=document.getElementById("hundred")

    
 
    const copCoin=parseInt(coin.innerText);
    const cutCoin=20;
    const finalCoin=copCoin-cutCoin;
    coin.innerText=finalCoin;
    
      const divi=document.getElementById("divi");

      if(coin.innerText<0){
        alert("😥You don't have much coins.You need at least 20 coins to make a call.😊");
        coin.innerText=0;
        return;
    } 
      const childDiv=document.createElement("div");
     childDiv.classList.add("flex","justify-between","mt-5","text-2xl","items-center","bg-gray-50","p-4","rounded-3xl")
     
     const card = item.parentElement.parentElement; 
     const first=card.querySelector(".title").innerText;
     const second=card.querySelector(".subtitle").innerText;
     const date=new Date();    
     const hours=date.getHours();
     const minutes=date.getMinutes();
     const scnd=date.getSeconds();

     let ampm = "";
        if (hours >= 12) {
         ampm = "PM";
           } 
           else {
                ampm = "AM";
                   }

                 if (hours > 12) {
                hours = hours - 12;
                      } 
                      else if (hours === 0) {
                         hours = 12;
                             }

                 if (minutes < 10) {
                     minutes = "0" + minutes;
                                 }
      childDiv.innerHTML=`<p>${first} </br> ${second}</p><p>${hours}:${minutes}:${scnd} ${ampm}</p>`;
      divi.append(childDiv); 
      alert(`📞Calling ${first} ${second}...`)
      
    })
}

const clear=document.getElementById("clear");
      clear.addEventListener("click",(e)=>{
        const divi=document.getElementById("divi");
        divi.innerHTML=""
      })

 const copy=document.getElementsByClassName("copying");
 for(const item of copy){
  item.addEventListener("click",(e)=>{
    const clipBoard=document.getElementById("copy");
    const copyText=parseInt(clipBoard.innerText);
    const newCopy=copyText+1;
    clipBoard.innerText=newCopy;
    const card = item.parentElement.parentElement; 
    const subtitle = card.querySelector(".subtitle").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = subtitle;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  })
 }