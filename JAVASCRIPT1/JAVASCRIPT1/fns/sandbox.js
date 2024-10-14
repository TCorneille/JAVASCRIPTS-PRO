const now=new Date();
console.log(dateFns.isToday(now));
console.log(dateFns.format(now,'YYYY'));
const before=new Date('March 1 2020');
console.log(dateFns.distanceInWords(now, before, {addSuffix : true}));