// JavaScript source code

$(document).ready(function () {
   // HelloWorld();

   var retTime = new GetTime();
   console.log(retTime.getTime());
   console.log(retTime.time);
});

//1-HelloWorld
function HelloWorld(){
    alert("Hello World!");
}

//2-Access Levels
function GetTime(){
    //private members
    var time = 'Mayıs, 23, 2019';

    //public members
    this.getTime= function(){
        return time;
    }
}


//3-Array

var dizi1= new Array();
dizi1[0]="ali";
dizi1[1]="veli";

var dizi2=[];
dizi2.push("mustafa");
dizi2.push("mehmet");

var dizi3 =[1,2,'m',{}];
delete dizi3[0];
console.log(dizi3.length); //3

console.log("-----Arrays-----");
console.log(dizi1[0]);
console.log(dizi2[0]);

//4-Boolean

if(''){
    console.log("oldu");
}
else
{
    console.log("olmadi");
}
//Output : olmadi
    
function validate(){
    var name='Mustafa';
    var age;
    return name && age;
}
if(validate()){
    console.log("gecti");
}
else
{
    console.log("kaldi");
}
//output : kaldi
console.log("----------");
//5-Captured variables
var x = 32;
var message = (function(x){
    return function(){
        console.log("x degeri ="+x);
    }
})(x);

message();  //32
x=12;
console.log(x);  //12
message();

//DateTime

var getthisTime = new Date();
console.log(getthisTime);


//Objects
console.log("OBJECTS");
var obj1 = {};

var obj2={
    adi:"MUSTAFA",
    soyadi:"EKici"
};

var nested = {
    'ogrenciler':{
        'ders':{
            'dersadi':"matematik",
            'not':12
        }
    }
}
 

console.log(obj2.adi);
console.log(nested.ogrenciler.ders.dersadi);
console.log(nested["ogrenciler"]["ders"]["dersadi"]);

//for 
var i;
for (i in obj2){
    console.log(i);
}

console.log("=========functions======");
//function
function reporter(rp){
    console.log("parametre degeri:"+rp);
}
function reporter2(r2){
    console.log("sonuc=",r2());
}

function cal(){
    return 2*2;
}
function karesi(arg){
    return arg*2;
}
reporter(109);
reporter(karesi(12));

reporter2(function(){ return 99;});
reporter2(cal);// argumansiz

function birdencok(x,y){
    var t = x+y;
    console.log("Sonuc:"+t);
}

(function(x,y){
    console.log(x+y);
})(11,11);


var jsonData={
    'root':{
        'numbers':[1,2,3],
        'letters':['a','b','c'],
        'products':['pc','tv','laptop']
    }
}

var j;
for(j in jsonData.root.numbers){
    console.log(j);
}