const pr=document.querySelector('article');
// console.log(pr.children);
// console.log(Array.from(pr.children));
Array.from(pr.children).forEach(child=>{
    child.classList.add('Cor');

});
const title=document.querySelector('h2');
console.log(title.parentElement);
console.log(title.nextElementSibling);
const ul=document.querySelector('ul');
const button=document.querySelector('button');
button.addEventListener('click',()=>{
    // console.log('already');
    const li=document.createElement('li');
    li.textContent='New thing';
    ul.prepend(li);
});
//  const list=document.querySelectorAll('li');
// list.forEach(item=>{
//    item.addEventListener('click', e=>{
//     //   console.log('done');
// //         // console.log(e.target);
// console.log('event in LI');

//       e.target.style.color='green';
     
//     });
//     }) ;   
    ul.addEventListener('click', e=>{
        // console.log('event in UL');;
        console.log(e.target);
        if(e.target.tagName ==='LI')
            e.target.style.color='green';
    });
