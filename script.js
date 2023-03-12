/**
 * TODO: 
 * 1. print person yang suka buah apple dan warna mata nya biru
 * 2. print berapa person yang age nya diatas 30
 * 3. print person yang isActive true and  gender nya female
 * 4. print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue
 * 5. print person yang mengandung huruf W di name nya
 * 6. print person isActive false dan gender nya male dan age nya diatas 25
 * 7. print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana
 * 8. print person gender male
 * 9. print person eyeColor Blue
 * 10. print person age diatas 30
 */

const person = [
  {
    "_id": "640b3d3e7e2c81d48f535009",
    "isActive": false,
    "age": 33,
    "eyeColor": "brown",
    "name": "Eve Howard",
    "gender": "female",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "640b3d3e4b72716107340351",
    "isActive": false,
    "age": 22,
    "eyeColor": "green",
    "name": "Kelley Romero",
    "gender": "female",
    "favoriteFruit": "apple"
  },
  {
    "_id": "640b3d3e184d909b2ac085e1",
    "isActive": true,
    "age": 37,
    "eyeColor": "green",
    "name": "Gates Silva",
    "gender": "male",
    "favoriteFruit": "apple"
  },
  {
    "_id": "640b3d3ecd350e2461c71d0b",
    "isActive": false,
    "age": 36,
    "eyeColor": "blue",
    "name": "Mccray Higgins",
    "gender": "male",
    "favoriteFruit": "banana"
  },
  {
    "_id": "640b3d3e59fac8430355752f",
    "isActive": true,
    "age": 38,
    "eyeColor": "brown",
    "name": "Dale Noel",
    "gender": "male",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "640b3d3efc35a039d5297911",
    "isActive": true,
    "age": 38,
    "eyeColor": "green",
    "name": "Garrett Porter",
    "gender": "male",
    "favoriteFruit": "banana"
  },
  {
    "_id": "640b3d3e7ef8aa9aaa76a615",
    "isActive": false,
    "age": 36,
    "eyeColor": "green",
    "name": "Wolf Holman",
    "gender": "male",
    "favoriteFruit": "banana"
  },
  {
    "_id": "640b3d3e254cf9584b9c6c52",
    "isActive": true,
    "age": 26,
    "eyeColor": "blue",
    "name": "Charlene Justice",
    "gender": "female",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "640b3d3e8bbd1deb145b994e",
    "isActive": true,
    "age": 40,
    "eyeColor": "blue",
    "name": "Kirkland Frost",
    "gender": "male",
    "favoriteFruit": "apple"
  },
  {
    "_id": "640b3d3eaddbc9ed25d80885",
    "isActive": true,
    "age": 27,
    "eyeColor": "green",
    "name": "Pearl Davis",
    "gender": "female",
    "favoriteFruit": "strawberry"
  }
]

// 1
// for (let i = 0; i < person.length; i++) {
//   if (person[i].favoriteFruit === "apple" && person[i].eyeColor === "blue") {
//     console.log(person[i]);
//   }
// }

// 2
// let temp = 0
// for (let i = 0; i < person.length; i++) {
//   if (person[i].age >= 30) {
//     temp++
//   }
// }
// console.log(temp);

// 3
// for (let i = 0; i < person.length; i++) {
//   if (person[i].isActive && person[i].gender === "female") {
//     console.log(person[i]);
//   }
// }

// 4
// for (let i = 0; i < person.length; i++) {
//   if ((person[i].age >= 30 || person[i].age <= 25) && person[i].eyeColor === "blue") {
//     console.log(person[i]);
//   }
// }

// 5
// for (let i = 0; i < person.length; i++) {
//   for (let j = 0; j < person[i].name.length; j++) {
//     if (person[i].name[j] === "w") {
//       console.log(person[i]);
//     }
//   }
// }

// 6
// for (let i = 0; i < person.length; i++) {
//   if (person[i].isActive === false && person[i].gender === "male" && person[i].age >= 25) {
//     console.log(person[i]);
//   }
// }

// 7
// for (let i = 0; i < person.length; i++) {
// // if ((person[i].age <= 30 || person[i].eyeColor === "brown") && person[i].favoriteFruit === "banana") {
//   //   console.log(person[i]);
//   // }
// }

// 8
// for (let i = 0; i < person.length; i++) {
  //   if (person[i].gender === "male") {
//     console.log(person[i]);
//   }
// }

// 9
// for (let i = 0; i < person.length; i++) {
//   if (person[i].eyeColor === "blue") {
//     console.log(person[i]);
//   }
// }

// 10
// for (let i = 0; i < person.length; i++) {
//   if (person[i].age >= 30) {
//     console.log(person[i]);
//   }
// }