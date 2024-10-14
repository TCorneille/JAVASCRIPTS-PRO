const form=document.querySelector('.sign-up');
const button=document.querySelector('button');
const valid=document.querySelector('.valid');
const bi=/^[a-zA-Z]{6,}$/
// // const pop=document.querySelector('.popup-wrapper');
button.addEventListener('click', ()=>{
form.style.display='block';

});
 form.addEventListener('submit',e=>{
    e.preventDefault(); 
   const username=form.username.value;
   
let result=bi.test(username);
if (result)
valid.textContent='is valid';
else
valid.textContent='invalid';
})
// const word='sdadiadf';
// 
form.username.addEventListener('keyup',e =>{
 if (bi.test(e.target.value))
 {
  form.username.setAttribute('class','success');
 }
 else
 {

  form.username.setAttribute('class','fail');
 }
});