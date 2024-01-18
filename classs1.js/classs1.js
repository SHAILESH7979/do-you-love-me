// let a={
//     fname:"yuvraj",class:"BCOM",college:"LSM"
// }
// console.log(a.fname."of class",a.class,"in college",a.college);
// let a=[
//     {fname:"priyanka",class:"B.sc",college:"LSM"},
//     {fname:"Nikita",class:"B.Sc",college:"LSM"},
//     {fname:"kajal",class:"B.Sc",college:"LSM"},
// ]
// console.log(a.fname,"of class",a.class,"in college");
// console.log(a[2].college);
 async function empolyee(){
    let n=document.getElementById("*").
    console.log(n);
    let data=fetch(`https://jsonplaceholder.typicode.com/todos/1={10}&idstarts=1001`)
    let fdata=await data.json();
    for(let i=0;i<n;i++){
        document.write(fdata[i].firstName+" "+fdata[i].id+" ",fdata[i].age+" "+"<br>")
    }
}
empolyee();

