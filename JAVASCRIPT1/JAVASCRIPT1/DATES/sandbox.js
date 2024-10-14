const now=new Date();
const another=new Date('March 28 2015 8:23:23');
const diff=now.getTime()-another.getTime();
console.log(now);
console.log(diff);
const min=Math.round(diff/1000/60);
const days=Math.round(min/60/24);
const yr=Math.round(days/365);
console.log(yr);

console.log(another.getTime());
console.log(now.getFullYear());
console.log(now.toLocaleString());
console.log(now.getTime());