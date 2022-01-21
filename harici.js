// console.log("hariciden gelen text")

// let channel =('prototürk')
// console.log(channel)

// let trans =true
// console.log(trans)

// console.log(typeof trans)

// let name =('Muhsin'),
// lastName=('Yagci')

// // console.log(name +lastName)

// // console.log('My name is',(name))

// let fullName =(`${name} ${lastName}`)
// console.log(fullName)

// console.log(fullName.split(''))

// console.log(fullName    .match(/muhsin/gi))

// let nums1=[1,2,3]
// let nums2=nums1

// console.log(nums1==nums2)
// //referanslar eşit olduğunda non-primitveler true döndürür aksi halde false

// let string ="whatsup man"
// console.log(string.toUpperCase())

// console.log(string.toLocaleLowerCase())

// //string to int yada hepsini int e çevirmek için kullandığımız method

// let num ='10'
// let numIt= parseInt(num)
// console.log(num)

// console.log('mehmet'.length=='ahmet'.length)

// const check= (4>3&&1>5)
// console.log(check)
// const chek= (4>3||1>5)
// console.log(chek)

//karşılaştırma operatörlerine dikkat et

// const isRaining = true
// isRaining
// ? console.log('Bir şemsiyeye ihyiyacın var ')
// : console.log('güzel bir gün tadını çıkart')

// alert('naber nasılsın')
// let sayi =prompt('bir sayı giriniz')

// let result=(sayi*2)
// console.log(result)

// confirm('emin misin moruk')

// const now=new Date()
// console.log(now)
// console.log(now.getFullYear())

// let sayi =prompt('sayı giriniz')
// let val =prompt('sayı giriniz')

// const total=(sayi*val)
// console.log(total)

// const date =new Date()

// let year =date.getFullYear(),
//     month= date.getMonth(),
//     day=date.getDate(),
//     hour=date.getHours(),
//     minute=date.getMinutes(),
//     second=date.getSeconds(),
//     dayName=date.getDay()

// let months=[
//     'ocak',
//     'şubat',
//     'mart',
//     'nisan',
//     'mayıs',
//     'haziran',
//     'temmuz',
//     'ağustos',
//     'eylül',
//     'ekim',
//     'kasım',
//     'aralık'
// ]

// let days=[
//     'pazartesi',
//     'salı',
//     'çarşamba',
//     'perşembe',
//     'cuma',
//     'cumartesi',
//     'pazar'
// ]

// let sickick=`${day},${months[month]},${year},${days[dayName]},${hour}:${minute}:${second}`

// console.log(months[0])
// console.log(sickick)

// let set=prompt('r giriniz')
// let tet=(set**2)
// console.log(tet)

// let y=prompt('bir y değeri giriniz')
// let x=(y**2-(y/2))
// let total=(x-y)
// console.log(total)

// let num3=prompt('bir değer giriniz')
// if(num3>0){
//     console.log(`${num3}, yani girdiğiniz sayı bir pozitif`)
// }else if(num3==0){
//     console.log(`${num3} girdiğiniz değer nötr`)
// }

// else{
//     console.log(`${num3} yani girdiğiniz sayı negatif`)
// }

// let weather ='cloudy'
// switch(weather){
//     case 'rainy ':
//         console.log('bugün hava yağmurlu')
//         break
//     case 'cloudy':
//         console.log('bugün hava karlı')
//         break
// }
// let soğuk='true'
// ?console.log('Today is very cold be careful')
// :console.log('Today is very beatiful weather happy days')

// let myAge=21
// let yourAge=prompt('yaşınızı giriniz')
// if (yourAge>myAge){
//     console.log(`${yourAge-myAge}year older than me`)
// }else if(yourAge<myAge){
//     console.log(`${myAge-yourAge}year older than you`)
// }else if(yourAge==myAge){
//     console.log('are you my twins buddy ?:D')
// }

// let a=4
// let b=3
// a>b
// ?console.log('a greater then b')
// :console.log('a not greater then b')

// let months1=prompt('Give me a month')
// switch (months1){
//     case 'january'
//          'february'
//          'december':
//          console.log('We are in Winter')
//          break
         
// }
    // let monthsDays=prompt('bir ay değeri veriniz')
    // if(monthsDays=='january'){
    //     console.log('this months is a 31 days')
    // }else if (monthsDays=='february'){
    //     console.log('tihs months is a 28 days')
    // }

//arrays//

// let arr1=['MAHOG',21]
// console.log(arr1.length)
// console.log('MAHOG'.split())
// //
// arr1[1]='22'
// let set=arr1[1]
// console.log(set)


// let set1=Array(4)
// console.log(set1)

// let arr3=Array(3).fill('Yükleniyor')
// console.log(arr3)

// let firstArray=[1,2,3,4,]
// let secondArray=[5,6,7]
// const thirdArrays=firstArray.concat(secondArray)
// console.log(thirdArrays)
// console.log(thirdArrays.indexOf(4))
// console.log(thirdArrays.includes(4))
// console.log(thirdArrays.join('-'))
// console.log(thirdArrays.slice(1,4))
// console.log(thirdArrays.splice(0,3,12,25,12))
// thirdArrays.push(88)
// thirdArrays.pop()
// let sonDeger=thirdArrays.pop()
// console.log(thirdArrays)
// console.log(sonDeger,thirdArrays[0])

// console.log(sonDeger-thirdArrays[0])

// thirdArrays.shift()
// thirdArrays.unshift(55)
// thirdArrays.reverse()
// console.log(thirdArrays)

//.sort -- string dizilerde a-z ye sıralama yaptırır 
// let arr4=[3,6,9,2,5,6]
// arr4.sort()
// console.log(arr4)
// let setArrays=[thirdArrays,firstArray]

// console.log(setArrays)
// console.log(setArrays[1][2])
// console.log(firstArray[0]+firstArray[1]+firstArray[2]*firstArray[3])
// console.log(thirdArrays)

