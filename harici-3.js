//--döngüler
//  const names=['Mehmet','Muhsin','Yağcı','Ayşe','Ece','Yağcı','BEKİR']
//  for(let i=0;i<=6;i++){
//      console.log(names[i])
// }
// for(let i=0;i<names.length;i++){
//     console.log(names[i])
// }
// const numbers=[1,2,3,4,5,6]
// const newArr=[]

// for (let i=0;i<numbers.length;i++)
// {
//     newArr.push(numbers[i]**2)
// }
// console.log(newArr)

// let i=0
// while(i<=6){
//     console.log(i)
//     i++
// }
//  let e=4
//  do{
//      console.log(e)
//      e++
// }while(e<=8)
// for(const name of names){
//     console.log(name.toUpperCase())
// }
// for(const name of names){
//     if(name=='Ece'){
//     console.log(`${name} bulundu`)
//     break}
//     console.log(name.toUpperCase())
// }
// for(const name of names){
//     if(name=='Ece'){
   
//     continue}
//     console.log(name.toUpperCase())
// }

//---Function
// function functionName(){

// }functionName()
// function square(){
//     let num=2
//     let sum=num*num
//     console.log(sum)
// }square()

// function connect(){
//     let firstName='Muhsin'
//     let lastName='Yağcı'
//     let space=' '
//     let fullName=firstName+space+lastName
//     console.log(fullName)
// }connect()
//  function connect(){
//      let firstName='Muhsin'
//      let lastName='Yağcı'
//      let space=' '
//      return firstName+space+lastName
// }console.log(connect())
// //--one parameter
// function areOfCircle(r){
//     let area=Math.PI*r*r
//     return area
// }console.log(areOfCircle(5))

// function numbers(number){
//     return number*number
// }console.log(numbers(20))
// //--two parameter
// function names(name1,name2){
    
//     let sum=name1+name2
//     console.log(sum)
// }names('Muhsin ','Yağcı')
// function num(num1,num2){
//     let sum2=num1*num2
//     return sum2
// }console.log(num(10,20))

// function garip(arr){
//     let sum=0;
//     for (let i=0; i < arr.length; i++){
//         sum = sum+arr[i];
//     }
//     return sum;
// }const numbers2=[1,2,3,4,5]
// console.log(garip(numbers2))

// function allNums(){
//     console.log(arguments)
// }allNums(1,2,3,4,5)

// const allNums2=(...arguments)=>{
//     let sum=0
//     for (const elements of arguments){
//         sum+=elements
//     }
//     return sum
// }
// console.log(allNums2(1,2,3,4,5,6,7))
//--expression
// const square = function(b){
//     return b*b
// }
// console.log(square(5))
// const square2 =n =>n*n
// console.log(square2(2))

// const change= arr=>{
//     const newArr=[]
//     for (const elements of arr){
//         newArr.push(elements.toUpperCase())
//     }
// return newArr
// }
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(change(countries))

// function greetings(name = 'Peter') {
//     let message = `${name}, welcome to 30 Days Of JavaScript!`
//     return message
//   }
  
//   console.log(greetings())
//   console.log(greetings('Asabeneh'))

// function yearsOld(old=21){
//     let text =`Today is my birthday Im ${old} years old`
//     return text
// }
// console.log(yearsOld)
// console.log(yearsOld(22))

// function currenAge(birthYear,currentYear=2022){
//     let age=currentYear-birthYear
//     return age
// }
// console.log('Age : ',currenAge(2001))

// //--- arrow function =>

// const greetings = (name = 'Peter') => {
//     let message = name + ', welcome to 30 Days Of JavaScript!'
//     return message
//   }
  
//   console.log(greetings())
//   console.log(greetings('Asabeneh'))

// const calculateAge=(currentYear,birthAge)=>
//     currentYear-birthAge

// console.log(calculateAge(2021,2001))

// const weightofObject=(mass,gravity=9.81)=>
// mass*gravity + 'N'
// console.log(weightofObject(98))

// a=5
// b=8
// function scope(){
//     console.log(a,b)
//     if (true){
//         console.log(a,b)
//     }
// }

//--Objects

// const rectangle={
//     width:100,
//     length:100
// }
// console.log(rectangle)

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//      getFullName: function(){
//          return `${this.firstName} ${this.lastName}`
//      }
//   }
//   console.log(person)
// //-nesnelere erişmek

// console.log(person.age)
// console.log(person['age'])
// //--nesne içinde nesne oluşturmak
// console.log(person.getFullName())

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//      getFullName: function(){
//          return `${this.firstName} ${this.lastName}`
//      }
//   }
//   person.nationality='Turkish'
//   person.title='devoloper'
//   person.skills.push('Meteor')
//   person.skills.push('C#')
//   person.ismarried=true

//   person.getPersonInfo=function(){
//     let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(', ')
//   let lastSkill = this.skills.splice(this.skills.length - 1)[0]

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//       let fullName=this.getFullName()
//       let statement=`Hi my name is ${fullName} Im ${this.age} years old.Yeah ım so old man but ım very good ${this.title} I know soo much programmer languages the ${skills}`
//       return statement
//     }

//   console.log(person)
//   console.log(person.getPersonInfo())

//   //-- objeyi kopyalayan method
//   const copyPerson=Object.assign({},person)
//   console.log(copyPerson)
//   //nesnenin özellliklerini anahtarları diziye çevirir
//   const arrPerson=Object.keys(copyPerson)
//   console.log(arrPerson)
//   //nesnenin değerlerini diziye çevirir
//   const tartPerson=Object.values(copyPerson)
//   console.log(tartPerson)
//   //her ikisiniide diziye çevirir
//   const both=Object.entries(copyPerson)
//   console.log(both)
//   //nesnenin içinde olup olmadığını kontrol eder
//   console.log(copyPerson.hasOwnProperty('firstName'))
  
// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     }
//   }
//   console.log(users.Alex.skills.length)
//   let A=users.Alex.skills.length
//   let B=users.Asab.skills.length
//   let C=users.Brook.skills.length
//   let D=users.Daniel.skills.length
//   let E=users.John.skills.length
//   console.log(A)
//    const value =()=>{
//        if(A>B&&A>C&&A>D&&A>E){
//        console.log('En çok iş yapan Alex')
//        }else if (B>A&&B>C&&B>D&&B>E){
//            console.log('En çok iş yapan Asab')
//        }else if (C>A&&C>B&&C>D&&C>E){
//            console.log('En çok iş yapan Brook')
//        }else if (D>A&&D>B&&D>C&&D>E){
//            console.log('En çok iş yapan Danie')
//        }else{
//            console.log('En çok iş yapan John')
//        }
//    }
//    console.log(value())
//    console.log(users)

//    const arrUsers=[`${users.Alex.points}=Alex`,`${users.Asab.points}=Asab`,`${users.Brook.points}=Brook`,`${users.Daniel.points}=Daniel`,`${users.John.points}=John`]
//    const inLine=arrUsers.sort()
//    const lat=inLine.pop()
//    console.log(lat)

//   users.Muhsin={
//     email: 'muhsin45@gmail.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 'too much'
//   }
//   console.log(users)
  
//   const bothof=Object.entries(users)
//   console.log(bothof)

//   const VaLue=Object.values(users)
//   console.log(VaLue)

// users.Alex.country='Denmark'
// users.Asab.country='India'
// users.Brook.country='USA'
// users.Daniel.country='Germany'
// users.John.country='England'
// console.log(users)

//-High order function
// const callback= (n)=>{
//     return n+n*2
// }
// const cube=(callback,n)=>{
//     return callback(n)-n
// }
// console.log(cube(callback,3))
// //--
// const function_1= (n)=>{
//     const function_2=(m)=>{
//         const function_3=(t)=>{
//             return m*n*t*2
//         }
//         return function_3
//     }
//     return function_2
// }
// console.log(function_1(4)(5)(2))
// //--forEach ??
// const numbers = [1, 2, 3, 4]

// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))

//--setInterval her 1000 ms de console.logu basacak

// const ınterval=()=>{
//     return console.log('say hello bitches')
// }
// setInterval(ınterval,1000)

//--setTimeout 5000 ms sonra console.log u basacak
// const timeout=()=>{
//     console.log('nasıl tak diye burdayım')
// }
// setTimeout(timeout,5000)

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num))
// //yukarda parantez içinde bir değer ve ne işlem yapılacağını yazarız
// console.log(sum)

// const city=['Istanbul','Izmir','Edirne','Kayseri']
// city.forEach(tog=>console.log(tog))

//--map işlemi değişiklik yapmamızı sağlar

// const numbers=[3,4,7,2,5]
// const squared=numbers.map((tog)=>tog*tog)
// console.log(squared)

//const country=['Finland','Denmark','England','France','Germany']
// const swip=country.map((tigh)=>tigh.toUpperCase())
// console.log(swip)

// const countryFirstThree = country.map((country)=>country.toUpperCase().slice(0,3))
// console.log(countryFirstThree)

//--filter
// const country=['Finland','Denmark','England','France','Germany']
// const filtreLand= country.filter((country)=>country.includes('land'))
// console.log(filtreLand)
// const filtreLand2=country.filter((country)=>country.endsWith('many'))
// console.log(filtreLand2)
// const filtre=country.filter((country)=>length<=6)
// console.log(filtre)

//--reduce??
// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((a, c) => a + c, 0)
// console.log(sum)

// //--every
// const bigNumbers=[65,75,120,63,98]
// const everyCheck=bigNumbers.every((a)=>a>50)
// console.log(everyCheck)

// // --find koşulu sağlayan ilk elemanı getirir
// let muhsin=21
// let osman=23
// let erdem=21
// let burak=22
// let ece=30
// let tekin=12
// let tahsin=18
// const ages=[`${muhsin}`,`${osman}`,`${erdem}`,`${burak}`,`${ece} `,`${tekin} `]
// const whoIsBigger=ages.find((age)=>age>tahsin)
// console.log(whoIsBigger)

// //--findIndex koşulu sağlayan ilk değerin indexini getirir
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const result=names.findIndex((name)=>name.length>7)
// console.log(result)

// //--some değerlerin benzer olup olmadığını karşılaştırır
// const country=['Finland','Denmark','England','France','Germany']
// const check=country.some((a)=>a==='number')
// console.log(check)

// //--sort dizileri sıralar
// const drinks=['Milk','Water','Chocalate','Coffe','Whiskey','Tea']
// console.log(drinks.sort())
// //-sortta sayısal değerleri sıralama (küçükten büyüğe)
// const numbers=[5,7.9,200,9.81765,25]
// numbers.sort(function sırala(a,b) {
//     return a-b
// })
// console.log(numbers)
// //--büyükten küçüğe
// const number=[5,7.9,200,9.81765,25]
// number.sort(function sırala(a,b) {
//     return b-a
// })
// console.log(number)

// //--objectlerde sort ile sıralama

// const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyo', age: 100 },
//     { name: 'Elias', age: 22 },
//   ]
//   users.sort((a, b) => {
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
//   })
//   console.log(users)
// //--
// const city =[
//     {name:'Kahramanmaras'},
//     {name: 'İzmir'},
//     {name: 'Eskişehir'},
//     {name: 'Tekirdağ'}
// ]
// //--dizideki elemanların uzunluğuna göre büyükten küçüğe sıralama
// city.sort((a,b)=>{
//     if(a.name.length<b.name.length)return 1
//     if(a.name.length>b.name.length)return -1
//     return 0
// })
// console.log(city)