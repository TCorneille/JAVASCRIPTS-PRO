const button=document.querySelector('button');
const pop=document.querySelector('.popup-wrapper');
const close=document.querySelector('.popup-close');

button.addEventListener('click',()=>{
pop.style.display='block';
});
close.addEventListener('click',()=>{
    pop.style.display='none';
    });