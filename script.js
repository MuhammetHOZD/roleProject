const btn1 = document.querySelector('.button1')
const led = document.querySelector('.LED')


btn1.addEventListener('click',function(){
    // debugger;
   if(led.classList.contains('active')){
    led.classList.remove('active')
    btn1.innerHTML = 'ON'

   } else{
    led.classList.add('active')
    btn1.innerHTML = 'OFF'
   }


})