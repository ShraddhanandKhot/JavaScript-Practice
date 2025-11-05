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

