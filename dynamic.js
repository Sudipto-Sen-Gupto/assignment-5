
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
        alert("Your number is invalid");
        coin.innerText=0;
        return;
    } 
      const childDiv=document.createElement("div");
     childDiv.classList.add("flex","justify-between","mt-5","text-2xl","items-center","bg-gray-50","p-4","rounded-3xl")
     
     const card = item.parentElement.parentElement; 
     const first=card.querySelector(".title").innerText;
     const second=card.querySelector(".subtitle").innerText;
     const date=new Date();    
     const hour=date.getHours();
     const minute=date.getMinutes();
     const scnd=date.getSeconds();
      childDiv.innerHTML=`<p>${first} </br> ${second}</p><p>${hour}:${minute}:${scnd}</p>`;
      divi.append(childDiv); 
      alert(`📞Calling ${first} ${second}...`)
      
    })
}

const clear=document.getElementById("clear");
      clear.addEventListener("click",(e)=>{
        const divi=document.getElementById("divi");
        divi.innerHTML=""
      })