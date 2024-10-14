// const pr=document.querySelector('.error');
// console.log(pr);
// const pr=document.querySelectorAlll('p');
//  pr.forEach(i=>{
//     console.log(i);

//  })
// //console.log(pr[2]);
// const title=document.getElementById('cc');
// console.log(title);
// const pr=document.querySelector('p');
// pr.innerText ='COR is going';

//    pr.forEach(i=>{
//  console.log(i.innerText);
//  i.innerText =' COR is going';
// })
//


//  })
// const pr=document.querySelector('.content');
//  console.log(pr.innerHTML);
//  pr.innerHTML +='<h2>HEY THERE</h2>'
 const pr=document.querySelector('.content');
const Students=['Cor','Niz','Deg'];
 Students.forEach(student=>{
   pr.innerHTML += `<ul><li>${student}</li></ul>`;
 })

