car=["bmw","lamborgini","Rolls royce","porsche","mustang"];
for (i=0;i<5;i++) {
//console.log(car[i]);
}
let position=car.indexOf("mustang");
//console.log(position);
//***************************** */


let num=[3,4,6,4,56,35,24,];
for(i=0;i<(num.length);i++){
    if (num[i]%2==0){
       // console.log(num[i]+ "is a even number");

    }
    else
    {
       // console.log(num[i] + "is odd number");
    }
}
//*****************(objects)*****************/
let mobile=[{model:"realme",manu:"india"},{model:"redmi",manu:"india"},{model:"vivo",manu:"usa"},{model:"apple",manu:"usa"}]
for(i=0;i<(mobile.length);i++)
{
    if (mobile[i]["manu"]=="usa"){
        console.log(mobile[i]["model"]+" is manufactured in usa")
    }
    else{
        console.log(mobile[i]["model"]+" is manufactured in india")
    }
}
