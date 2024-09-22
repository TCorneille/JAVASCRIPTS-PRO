const ul=document.querySelector('.Students');
students=['Cor','Niz','Mar'];
let html=``;

students.forEach(function(i) {
    html=html+`<li style="color :red">${i} </li>`;
    
});
console.log(html);
ul.innerHTML=html;