const correct=['A','C'];
const form=document.querySelector('.quiz');
form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    const answers=[form.capital.value,form.president.value];
    answers.forEach((a,index)=>{
        if (a===correct[index])
            score+=5;
    });
    console.log(score);
});