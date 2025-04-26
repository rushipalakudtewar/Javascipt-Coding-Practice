//push
let arr1 = ['banaa','raju','kedar']
arr1.push('vaaa')
console.log("arr1 ",arr1)

//map
let arr2 = [1,4,5,6];
let arr3= arr2.map((i)=>i*2);
console.log('arr3',arr3)

//reduce
let arr4 = [3,4,5,6];
let sum = arr4.reduce((sum,i)=>sum+i,0);
console.log("sum ",sum)

//get object
let profile ={
    name:'abhi',
    price:24
}
console.log("profile",profile['name'])
//*in* is used in the object
for(let key in profile){
     console.log("key ",key,"profile",profile[key])
}

//map
let users =[
    {name:'rushi',age:34},
    {name:'kedar',age:45}
    ]
const names = users.map((item)=>item.name);
console.log("names ",names)

//filter
const activieuser = users.filter((i)=>i.age!=45)
console.log("activie ",activieuser)




//for each loop
const data ={
    employees:[
           {name:'rushi',age:34},
    {name:'kedar',age:45}
        ]
}

data.employees.forEach((i)=>console.log(i.name))


//new map
let map =new Map();
console.log("map ",map)
let anotherMap = new Map([
    ['name','kedar'],
    ['age',10],
    ['abhi','rahul']
    ])
console.log("anotherMap",anotherMap)

if(anotherMap.has('age')){
    console.log("working")
}

//new map2
let map2 = new Map();
map2.set('aruh','viru').set('amit',3)

console.log("map 2 ",map2.get('amit'))//getting data with using key
//output:3


const myMap = new Map();

// 1. set(key, value)
console.log("//set(key, value)//")
myMap.set('name', 'GFG');
myMap.set('age', 25);
myMap.set(1, 'One'); 

console.log(myMap);
console.log(myMap.size)

// Map(3) { 'name' => 'GFG', 'age' => 25, 1 => 'One' }

// 2. get(key)
console.log('//get(key)//')
console.log(myMap.get('name')); 
console.log(myMap.get('age')); 
console.log(myMap.get(1)); 
console.log(myMap.get('invalidKey'));

console.log('//has//')

console.log(myMap.has('name'));
console.log(myMap.has(1))
console.log(myMap.has('age3'))

console.log('//delete//')
myMap.delete(1)
console.log(myMap.has(1))
console.log(myMap);

//geting how may records are present
console.log(myMap.size)

console.log('//clear//')
myMap.clear();
console.log(myMap)

myMap.set('ravi',23)
console.log(myMap)


let arr = [40, 50, 30, 40, 50, 30, 30]

arr.sort((a,b)=>a-b)
console.log(arr)



function twoSum(arr,target){
    const newMap = new Map();
    for(let i=0;i<arr.length;i++)
    {
        const diff = target-arr[i];
        console.log('diff',diff)
        if(newMap.has(diff)) return [newMap.get(diff),i]
        newMap.set(arr[i],i);
        console.log("i",newMap)
        
    }
    console.log("newMap ",newMap);
}
console.log(twoSum([2,7,11,14],9))



//Output:

// arr1  [ 'banaa', 'raju', 'kedar', 'vaaa' ]
// arr3 [ 2, 8, 10, 12 ]
// sum  18
// profile abhi
// key  name profile abhi
// key  price profile 24
// names  [ 'rushi', 'kedar' ]
// activie  [ { name: 'rushi', age: 34 } ]
// rushi
// kedar
// map  Map(0) {}
// anotherMap Map(3) { 'name' => 'kedar', 'age' => 10, 'abhi' => 'rahul' }
// working
// map 2  3
// //set(key, value)//
// Map(3) { 'name' => 'GFG', 'age' => 25, 1 => 'One' }
// 3
// //get(key)//
// GFG
// 25
// One
// undefined
// //has//
// true
// true
// false
// //delete//
// false
// Map(2) { 'name' => 'GFG', 'age' => 25 }
// 2
// //clear//
// Map(0) {}
// Map(1) { 'ravi' => 23 }
// [
//   30, 30, 30, 40,
//   40, 50, 50
// ]
// diff 7
// i Map(1) { 2 => 0 }
// diff 2
// [ 0, 1 ]

// === Code Execution Successful ===