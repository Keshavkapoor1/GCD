let btn = document.querySelector("#button");



btn.addEventListener("click", function(event) {
 let a = parseInt(document.querySelector("#input1").value);
let b = parseInt(document.querySelector("#input2").value);
let c = parseInt(document.querySelector("#input3").value);
let d = parseInt(document.querySelector("#input4").value);
let e = parseInt(document.querySelector("#input5").value);
    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100
        ||a<0||b<0||c<0||d<0||e<0)
     {
    alert("Enter correct marks");
    event.preventDefault();
    return;
    }
   

let obtained=a+b+c+d+e;
let percentage=(obtained*100)/500;
let grade;
if(percentage>90){
    grade="A+";

}
else if(percentage>80){
    grade="A";
}
else if(percentage>70){
     grade="B+";
}
else if(percentage>60){
    grade="B";
}
else if(percentage>50){
    grade="C+"

}
else if(percentage>40){
  grade="C";
}
else if(percentage>=33){
    grade="D+";
}
else{
    grade="F";
}
let Remarks;
if(a<33||b<33||c<33||d<33||e<33||grade=="F"){
    Remarks="Fail";
    document.querySelector("#remarks").style.color="red";
}
else{
    Remarks="Pass";
   document.querySelector("#remarks").style.color="green";
}


document.querySelector("#Obtainedmarks").innerHTML=obtained;
document.querySelector("#percentage").innerHTML=percentage.toFixed(2)+"%";
document.querySelector("#grade").innerHTML=grade;
document.querySelector("#remarks").innerHTML=Remarks;
})


