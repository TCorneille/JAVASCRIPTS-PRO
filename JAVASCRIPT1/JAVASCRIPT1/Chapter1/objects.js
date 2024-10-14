// const papers=[
//     {title:'to go',likes:10},
//     {title:'to do',likes:20}];
//     console.log(papers);

let student={
    nom:'Ella',
    age:5,
    email:'ellak@gmail.com',
    location:'KGL',
    papers: [{title:'to go',likes:10},
    {title:'to do',likes:20}],
    login:function(){
        console.log('the student has logged in');
    },
    logBlogs:function(){
        this.papers.forEach(paper=>{
            console.log(paper.title,paper.likes)
        });
    }
};
//student['location']='KABAYA';
student.logBlogs();
//console.log(student);

