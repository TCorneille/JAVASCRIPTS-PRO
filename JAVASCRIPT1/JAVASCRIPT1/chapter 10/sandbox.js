const score=[10,40,30,5,50];
const passed=score.filter((i)=>{
    return i>15;
});
console.log(passed);