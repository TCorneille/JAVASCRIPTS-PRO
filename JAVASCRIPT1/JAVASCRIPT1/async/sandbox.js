 const getTodos=(callback)=>{
  const request= new XMLHttpRequest();
  //const getTodos=(callback)=>{

request.addEventListener('readystatechange', ()=>{
if(request.readyState===4&&request.status===200){
callback();

   //console.log(request, request.responseText);
}
   else if(request.readyState===4){
      callback();
    //console.log('could not');

   }
 
   });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();

 };
 getTodos(()=>{
   console.log('yes');
 });

    
    