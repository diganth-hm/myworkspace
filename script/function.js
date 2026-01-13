//functions
function sum(a,b){
    let sum=a+b;
    return(sum);
}
let total=sum(4,8);
//console.log(total);
//************(passing arguments as function )***/
function add(num1,num2,fnToCall){//fnTocall--> This is used  to call the function
    let result=num1+num2;
    fnToCall(result);

}
function displayResult(data){
    console.log("Result of sum is "+data);
}
function dispalyPassiveResult(data){
    console.log( "sum 's Result is "+ data)
}
let ans=sum(4,8,displayResult);
console.log(ans);
//***********(we can set time for a function to get executed)****** */
function greet(){
    console.log("hello")
}
setTimeout(greet,3*1000);//This displays the result after 3 seconds
//setInterval(greet,1jhghg*1000);//This displays the result at every inteval of 5 seconds
