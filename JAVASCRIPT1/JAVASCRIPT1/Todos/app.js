const addsomething=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input')
const totheweb=todo=>{
    const html= `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>text</span>
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML += html;
};
addsomething.addEventListener('submit',e =>{
e.preventDefault();
const todo=addsomething.add.value.trim();
// console.log(todo);
if(todo.length){
totheweb(todo);
addsomething.reset();
}

})
list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filtertodos=(term)=>{
Array.from(list.children)

   .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
   .forEach((todo)=>todo.classList.add('filtered'));
   Array.from(list.children)
   .filter((todo)=>todo.textContent.toLowerCase().includes(term))
   .forEach((todo)=>todo.classList.remove('filtered'));



};

search.addEventListener('keyup', ()=>{
    const term=search.value.trim().toLowerCase();
    filtertodos(term);
    
})