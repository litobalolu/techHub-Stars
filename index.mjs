// import startApp from './app.mjs';

// document.addEventListener('DOMContentLoaded', startApp); 
const phoneNumber = document.querySelector(".number")
const resetBtn = document.querySelector(".reset")
const submitBtn = document.querySelector(".submit")
const Image = document.querySelector(".img-container")
const errorText = document.querySelector(".error-text")

phoneNumber.addEventListener("keyup", function(){
let MTNPattern= /^(\+234803|0803|\+234806|0806|\+234814|0814|\+234810|0810|\+234816|0816|\+234703|0703|\+234706|0706|\+234903|0903|\+234906|0906|\+234704|0704|\+234916|0916|\+234913|0913|\+234702|0702)\d{7}$/;
  let gloPattern = /^(\+234905|0905|\+234705|0705|\+234815|0815|\+234811|0811|\+234807|0807|\+234805|0805|\+234915|0915)\d{7}$/;
  let airtelPattern = /^(\+234802|0802|\+234808|0808|\+234812|0812|\+234708|0708|\+234701|0701|\+234902|0902|\+234901|0901|\+234912|0912|\+234904|0904|\+234907|0907)\d{7}$/;
  let mobilePattern = /^(\+234909| 0909|\+234809|0809|\+234817|0817|\+234818|0818|\+234908|0908)\d{7}$/;
  if(!phoneNumber.value || ![11,14].includes(phoneNumber.value.length)){
    Image.style.display = "none"
  } else if(MTNPattern.test(phoneNumber.value)){
    Image.src = //'https://www.mtn.com/wp-content/themes/mtn-refresh/public/img/mtn-logo-footer.svg'
      './mtn.jpg'
    Image.style.display = "block"
    errorText.style.display = "none"
  } else if(gloPattern.test(phoneNumber.value)){
    Image.src = './glo.jpg'
    Image.style.display = "block"
    errorText.style.display = "none"
  }
  else if(airtelPattern.test(phoneNumber.value)){
    Image.src = './airtel.png'
    Image.style.display = "block"
    errorText.style.display = "none"
  }
  else if(mobilePattern.test(phoneNumber.value)){
    Image.src = './9mobile.jpg'
    Image.style.display = "block"
    errorText.style.display = "none"
  } else{
    errorText.style.display = "block"
  }

})

resetBtn.addEventListener("click", function(){
  phoneNumber.value = ""
  Image.style.display = "none"
  errorText.style.display = "none"
})