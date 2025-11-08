// Keywords  let , const 
 let a =20;
 console.log(a) // o/p 20
 a=23
 console.log(a) // o/p 23

 const b =30;
 console.log(b) // o/p 30

 // b =32;   this will throw an erron -> TypeError: Assignment to constant variable.

 // datatypes
 const name = "Shraddhannd";
 const age = 23;
 const isStudent = true;
console.log(typeof name ); // string
console.log(typeof age ); // number
console.log(typeof isStudent ); // boolean

// concatination 
console.log("My name is " + name  + "and my age is " + age);
console.log(`My name is  ${name} and my age is ${ age}`)

//string operantions
const Name = "Shraddhanand Khot";
console.log( `length ${Name.length}`);
console.log(`in uppercase ${Name.toUpperCase()}`)
console.log(`in lowercase ${Name.toLowerCase()}`)
console.log(`substring ${Name.substring(0,12).toUpperCase()}`);
console.log(`splitting  ${Name.split('d' )}`)

// Arrays
const fruits = ['Apple' ,'Banana', 20,true];
console.log(fruits[3]);
fruits[4] ="Pinapple";
console.log(fruits[4]);
fruits.push("Mango")
console.log(fruits);
fruits.unshift('Strwaberry');
console.log(fruits);
console.log(`delted ${fruits.pop()}` );
const nums = new Array(12,4,5);
console.log(Array.isArray(nums));

const person ={
    firstname :'Shraddhanand',
    lastname :'Khot',
    age : 23,
     
    hobbies:['Movies','Cricket',],
    address:
    {
       State : 'Karnataka',
       City:'Belgaum'
    }
}

console.log(person.hobbies[1]);
console.log(person.address.City);
console.log(JSON.stringify(person));

//loops 
for(let i =0 ; i<=10; i++)
{
    if( i % 2 != 0)
    {
        continue;
    }
    
    console.log(i);
}
 console.log("______________________________");
i = 10
while(i >=0)
{
    console.log(i);
    i--;
}

const MyTask = [
    {
        id : 1, 
        task: "program 1",
        isCompleted : true
    },
    {
        id : 2, 
        task: "writing mail",
        isCompleted : false
    },
     {
        id : 3, 
        task: "Complete the assignment",
        isCompleted : false
    }
];

for(let i =0; i< MyTask.length; i++)
{
    console.log(MyTask[i].task);
}
for(let task of MyTask)
{
    console.log(task.isCompleted);
}
//forEach
MyTask.forEach(function(t)
{
    console.log(t);
});
//map
console.log("_________________");
MyTask.map(function(t)
{
    console.log(t.task);
});
console.log("_ _ _ _ _ _ _ _ _ _ _ ");
// filter
MyTask.filter(function(t)
{
    console.log(t);
});

// control statements
const  x= 1;
const color = x > 9 ? 'red' : 'yellow';
console.log(color);

switch(color)
{
    case 'red' : 
        console.log("COLOR IS RED");
        break;
    case 'yellow' : 
        console.log("COLOR IS yellow");
        break;
    default:
         console.log("COLOR IS default");
        break;
    
}

//functions
const now = new Date()
console.log(now.getHours() +":"+ now.getMinutes());
const time = now.getHours();

function Greet()
{
  if ( time >=0 && time <12)
  {
    console.log("Good Morning");
  }
  else if(time >=12 && time < 16)
  {
      console.log("Good Afternoon");
  }
  else{
    console.log("Good Eveining");
  }
  
}
Greet();
//constructor function 
function college(clgname,clgaddress,estyear)
{
    this.clgaddress= clgaddress;
    this.clgname = clgname;
    this.estyear =new Date(estyear)

 this.getEstablishYear = function(){
    return this.estyear.getFullYear();
 }
 
}
college.prototype.getfullnameadd = function()
 {
    return `${this.clgname} ${this.clgaddress}`;
 }

const clg1 = new college("BMSIT","Yelhanka,Bengaluru",'1-1-2002');
console.log(clg1.getEstablishYear());
console.log(clg1);


// class
class Myclg{
    constructor(name , lname)
    {
        this.name =name;
        this.lname = lname;
    }
    
}
const clgg = new Myclg("Skk","Khot");
console.log(clgg.name);