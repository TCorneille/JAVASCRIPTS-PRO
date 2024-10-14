const copy=document.querySelector('.copy-this');
copy.addEventListener('copy',()=>{
    console.log('byaratuvunnye mwana');
});
const box=document.querySelector('.box');
box.addEventListener('mousemove', e=>{
    // console.log(e.offsetX,e.offsetY);
    box.textContent=`pos x ${e.offsetX} pos y ${e.offsetY}`;

});
document.addEventListener('wheel',e=>{
    console.log(e.pageX,e.pageY);
});