


// loop

// for( i=5 ; i < 100; i++){
// document.write("this loop " + i + "<br>");
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";
// for(let i = 0 ; i < cars.length ; i++){
// text += cars[i] + "<br>";
// // text = text + cars[i] + "<br>";



// }
// document.write(text);

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let i , len , text;
// for(i=0 ,len =cars.length, text="" ; i < len ; i++){
//     text += cars[i] + "<br>";

// }
// document.write(text);

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i, len, text;
// for (i=0,len =cars.length, text = ""; i < len; i++) {
//   text += cars[i] + "<br>";
// }
// document.write("<hr>");
//  var x= 0;
// while(x < 100){
//     document.write("this loop " + x + "<br>");
//     x++;
// }do{
//  var res =    prompt("enter your name", "");
// }while(res)












// ERROR OBJECT

// var myError = new Error("custome error");

// var result = parseInt(prompt("enter value between 10 and 20","10"));

// if(result<10){
//     throw "less then expected";
// }else if(result>20){
//     throw new RangeError("OUT OF RANGE");
// }else{
//     alert("yes value accepted");
// }


// function statment 

// var result = fun1(1,2);
// document.write(result);
// function fun1(a,b){
//     return a + b;
// }

// if(result > 2){
//     document.write("yes");
// }else{
//     document.write("no");
// }

//varible function
//function exprission 
// anonymos function
// literal function creation 

// var fun = function (x,y){
//     return x + y;
// }
// document.write(fun(2,2));



// var arr = [ 1,2,3,"abc" , function (x,y){
//         return x + y;
//     } , "mostafa"];
//     var res = arr[4];
//     document.write(res(1,2));

//    document.write(arr[4](1,2));

// return function from another function
// function newAdd(x , y ,z){

//     return function (){
//         return x + y + z;
//     }

// }
// var result =newAdd(1,2,3);
// document.write(result());


// create object by factory & costructor function
// create object by factory

// function employee(nm , dept , sal){
// return {
//     empName : nm ,
//     empDept :dept,
//     empsal : sal,
//    empInfo : function(){
//     return this.empName +" jop the sallary"+this.empsal;
//    }
// }

// }
// var call = employee("mostafa " , "sd " , 5000);
// document.write(call);
// document.write(call.empName);
// document.write(call.empDept);
// document.write(call.empInfo());

// & costructor function
// UPPER CASE -> Employee name function

// function Employee(name , dept , sal){
//   this.empName =name;
//   this.empdept =dept;
//   this.empsalary =sal;
// // return
// }

// var me = new Employee( "mostafa" , "DS" , 2000);
// document.write(me.empName);

// document.write(me.hasOwnProperty("empName"));
// document.write(me.hasOwnProperty("empname"));
// document.write(me.toString());
// // static class method
// document.write(Object.keys(me));
// document.write(Object.values(me));

// // delete

// document.write(me.empName);

// // delete me.empName;
// document.write(me.empName);
// // object object
// for(var i in me){
//     document.write(i + ":"+ me[i]);
// }



// function object
//function statment 

// function fun(a,b,c){
// return a+b+c;
// }
// document.write(fun(1,2,3));

// output
// 3//


//anonmouse function

// var fun = function(a,b){
//   return a+b;
// }

// document.write(fun(1,2));

//function consructor
// var fun = function(a,b){
//   return a+b;
// }
// var sum = new fun(1,2);
// document.write(sum);




// html Element by id -> Done
// html Element by tag name -
// html Element by class name -
// html Element by cssselector -
// html Element by html object collection -


// html Element by tag name -

// const element = document.getElementsByTagName("p");//

//// document.getElementById("test").innerHTML = 'this code dom :' + element[0].innerHTML;

// this code dom :  hello engineer amr software hello engineer amr software

// className


// const element = document.getElementsByClassName("test");//


// start Bom Browser object model 
// var x;
// function openwindowClick(){
//    x =   open("chaing.html", "" , "width= 150 , height=150");
// }

// function closewindowClick(){
//     x.close();
// }


// function bgcolorwindowClick(){
//     x.document.bgColor= "green"
//     x.focus();
// }

// function moveBy(){
//     x.moveTo(50,50);
//     x.focus();

// }

// window timers

// function startalertt(){
   
//    var timeId =setTimeout(function(){
//         alert("hello mostafa");
//     },1000);
// }

// function stopalertt(){
//     clearInterval(timeId);
// }
// fname : mostafa 
// function test(){
//     let s = document.forms['myform']['fname'].value;
//     if(s == ""){
//  alert("not data please enter your name");
//  return false;
//     }
// }


// function test(){
//     let s =document.getElementById('test').value;
//     let testt;
//     if(isNaN(s)||s < 1 || s > 10){
//         testt = "input not found";
//     }else{
//         testt = "yes this data true";
//     }

//     document.getElementById('test').innerHTML = testt ;
// }



// function functionname(){
//     let id = null;
//     const element = document.getElementById("animate");

// let post = 0 ; 
// clearInterval(id);
// id = setInterval(amr, 5);
// function amr() {
// if(post == 350){clearInterval(id);}else
// {
//     post++;
//     element.style.top = post + "px";
//     element.style.left = post + "px";
// }







// }

// }



const inputBox = document.getElementById("box");
const listContianer = document.getElementById("list");

function addtask(){
    if(inputBox.value === ''){
   console.error("Error please write valu in input"); 
}
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContianer.appendChild(li);
        }
        inputBox.value= '';
}




// const  x = document.getElementById("box");
//  const  s = document.getElementById("list");
// // const 

// function addtask(x){
  
// if(x.value === ''){
//     alert("!!!! no data");

// }else{
//     let li =document.createElement("li");
//     li.innerHTML = x.value;
//     s.appendChild(li);

// }

// }
