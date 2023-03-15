/**
 * TODO: wajib ada yang menggunakan array method FIND, FILTER atau MAP dalam pengerjaannya.
 * 1) display/print person yang registered dibawah tahun 2022
 * 2) display person yang address nya Bali 
 * 3) display friends yang hobby nya football
 * 4) display hobby dari friends id 2
 * 5) display friends yang gender nya male dan mempunya hobby basketball
 * 6) display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry
 * 7) display siapa saja yang mempunya teman name Theresia
 * 8) display hobby id 1 dari friends yang isActive nya true
 * 9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball
 * 10) display person yang mempunya friends gender male atau favorite fruit nya banana dan registered di tahun 2023
 */

// data
let data = [
  {
    "_id": "641039c98c8e933d41aead8f",
    "age": 24,
    "eyeColor": "brown",
    "name": "Barnett Houston",
    "address": "Bandung",
    "registered": "2020-04-23T02:05:47 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Shifly",
        "isActive": true,
        "favoriteFruit": "banana",
        "gender": "male",
        "hobby": [
          {
            "id": 1,
            "hobby": "basketball"
          },
          {
            "id": 1,
            "hobby": "basketball"
          }
        ]
      },
      {
        "id": 1,
        "name": "Shifly",
        "isActive": false,
        "favoriteFruit": "banana",
        "gender": "male",
        "hobby": [
          {
            "id": 1,
            "hobby": "baseball"
          },
          {
            "id": 2,
            "hobby": "baseball"
          }
        ]
      },
      {
        "id": 2,
        "name": "Shifly",
        "isActive": true,
        "favoriteFruit": "banana",
        "gender": "male",
        "hobby": [
          {
            "id": 2,
            "hobby": "basketball"
          },
          {
            "id": 1,
            "hobby": "football"
          }
        ]
      }
    ]
  },
  {
    "_id": "641039c93b072fd7a262e596",
    "age": 36,
    "eyeColor": "brown",
    "name": "Clayton Mcintyre",
    "address": "Bandung",
    "registered": "2021-11-24T02:52:29 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Theresia",
        "isActive": true,
        "favoriteFruit": "apple",
        "gender": "male",
        "hobby": [
          {
            "id": 1,
            "hobby": "basketball"
          },
          {
            "id": 2,
            "hobby": "football"
          }
        ]
      },
      {
        "id": 1,
        "name": "Theresia",
        "isActive": true,
        "favoriteFruit": "banana",
        "gender": "male",
        "hobby": [
          {
            "id": 2,
            "hobby": "basketball"
          },
          {
            "id": 1,
            "hobby": "football"
          }
        ]
      },
      {
        "id": 2,
        "name": "Shifly",
        "isActive": false,
        "favoriteFruit": "apple",
        "gender": "male",
        "hobby": [
          {
            "id": 1,
            "hobby": "football"
          },
          {
            "id": 2,
            "hobby": "baseball"
          }
        ]
      }
    ]
  },
  {
    "_id": "641039c9c01c3fb9270aec69",
    "age": 21,
    "eyeColor": "green",
    "name": "Floyd Levine",
    "address": "Bali",
    "registered": "2022-03-02T11:58:21 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Farid",
        "isActive": true,
        "favoriteFruit": "apple",
        "gender": "male",
        "hobby": [
          {
            "id": 1,
            "hobby": "football"
          },
          {
            "id": 2,
            "hobby": "baseball"
          }
        ]
      },
      {
        "id": 1,
        "name": "Farid",
        "isActive": true,
        "favoriteFruit": "strawberry",
        "gender": "male",
        "hobby": [
          {
            "id": 1,
            "hobby": "football"
          },
          {
            "id": 2,
            "hobby": "basketball"
          }
        ]
      },
      {
        "id": 2,
        "name": "Farid",
        "isActive": false,
        "favoriteFruit": "strawberry",
        "gender": "male",
        "hobby": [
          {
            "id": 1,
            "hobby": "baseball"
          },
          {
            "id": 1,
            "hobby": "football"
          }
        ]
      }
    ]
  },
  {
    "_id": "641039c9cf1a2a74649e2788",
    "age": 36,
    "eyeColor": "green",
    "name": "Marietta Huffman",
    "address": "Jakarta",
    "registered": "2020-05-19T08:14:37 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Farid",
        "isActive": false,
        "favoriteFruit": "apple",
        "gender": "female",
        "hobby": [
          {
            "id": 1,
            "hobby": "football"
          },
          {
            "id": 2,
            "hobby": "football"
          }
        ]
      },
      {
        "id": 1,
        "name": "Theresia",
        "isActive": false,
        "favoriteFruit": "apple",
        "gender": "female",
        "hobby": [
          {
            "id": 2,
            "hobby": "basketball"
          },
          {
            "id": 2,
            "hobby": "football"
          }
        ]
      },
      {
        "id": 2,
        "name": "Theresia",
        "isActive": false,
        "favoriteFruit": "strawberry",
        "gender": "female",
        "hobby": [
          {
            "id": 1,
            "hobby": "football"
          },
          {
            "id": 1,
            "hobby": "football"
          }
        ]
      }
    ]
  },
  {
    "_id": "641039c9302b4679d6c471f6",
    "age": 30,
    "eyeColor": "brown",
    "name": "Becky Owen",
    "address": "Bandung",
    "registered": "2021-11-24T02:05:38 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Theresia",
        "isActive": true,
        "favoriteFruit": "banana",
        "gender": "female",
        "hobby": [
          {
            "id": 2,
            "hobby": "basketball"
          },
          {
            "id": 1,
            "hobby": "basketball"
          }
        ]
      },
      {
        "id": 1,
        "name": "Shifly",
        "isActive": false,
        "favoriteFruit": "strawberry",
        "gender": "female",
        "hobby": [
          {
            "id": 1,
            "hobby": "baseball"
          },
          {
            "id": 1,
            "hobby": "baseball"
          }
        ]
      },
      {
        "id": 2,
        "name": "Shifly",
        "isActive": false,
        "favoriteFruit": "banana",
        "gender": "female",
        "hobby": [
          {
            "id": 2,
            "hobby": "football"
          },
          {
            "id": 1,
            "hobby": "baseball"
          }
        ]
      }
    ]
  },
  {
    "_id": "641039c967257a775d14a719",
    "age": 35,
    "eyeColor": "green",
    "name": "Chaney Powell",
    "address": "Bandung",
    "registered": "2022-06-08T11:16:31 -07:00",
    "friends": [
      {
        "id": 0,
        "name": "Theresia",
        "isActive": false,
        "favoriteFruit": "apple",
        "gender": "male",
        "hobby": [
          {
            "id": 2,
            "hobby": "baseball"
          },
          {
            "id": 1,
            "hobby": "baseball"
          }
        ]
      },
      {
        "id": 1,
        "name": "Farid",
        "isActive": false,
        "favoriteFruit": "banana",
        "gender": "male",
        "hobby": [
          {
            "id": 1,
            "hobby": "baseball"
          },
          {
            "id": 1,
            "hobby": "basketball"
          }
        ]
      },
      {
        "id": 2,
        "name": "Farid",
        "isActive": false,
        "favoriteFruit": "banana",
        "gender": "male",
        "hobby": [
          {
            "id": 2,
            "hobby": "football"
          },
          {
            "id": 2,
            "hobby": "football"
          }
        ]
      }
    ]
  }
]

// 1) display / print person yang registered dibawah tahun 2022
console.log("--------- 1 ---------");

let personRegis = data.find(e => {
  return e.registered.substring(0, 4) < "2022"
})
console.log(personRegis);

// 2) display person yang address nya Bali
console.log("--------- 2 ---------");

let personAddress = data.find(e => {
  return e.address === 'Bali'
})
console.log(personAddress);

// 3) display friends yang hobby nya football
console.log("--------- 3 ---------");

let friendHobby = data.map(x => {
  return x.friends.filter(y => {
    return y.hobby.filter(z => z.hobby === 'football')
  })
})

// menggunakan for loop
// for (let i = 0; i < data.length; i++) {
  //     for (let j = 0; j < data[i].friends.length; j++) {
    //         for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
//             if (data[i].friends[j].hobby[k].hobby === 'football') {
//                 console.log(data[i].friends[j])
//             }
//         }
//     }
// }
console.log(friendHobby);

// 4) display hobby dari friends id 2
console.log("--------- 4 ---------");

let friendId = data.map((x) => {
  return x.friends.filter(y => {
    return y.id === 2
  })
})
console.log(friendId);

// 5) display friends yang gender nya male dan mempunya hobby basketball
console.log("--------- 5 ---------");

let temp = []
for (let i = 0; i < data.length; i++) {
  temp.push(data[i].friends.filter(x => {
    return x.gender === 'male' && x.hobby.some(z => z.hobby === 'basketball')
  }))
}

// menggunakan for loop
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].friends.length; j++) {
//         for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
//             if (data[i].friends[j].hobby[k].hobby === 'basketball' && data[i].friends[j].gender === 'male') {
//                 console.log(data[i].friends[j])
//             }
//         }
//     }
// }
console.log(temp);

// 6) display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry
console.log("--------- 6 ---------");

let friends = data.map(x => {
  return x.friends.filter(y => {
    return y.isActive === true && y.favoriteFruit === 'strawberry' && y.gender === 'female'
  })
})
console.log(friends);

// 7) display siapa saja yang mempunya teman name Theresia
console.log("--------- 7 ---------");

let arr = []

// Cara 1 dengan method
// let dataFriendTheresia = (data.map((x) => {
//   return x.friends.filter((y) => {
//     if (y.name === 'Theresia') {
//       arr.push(x)
//     }
//   })
// }))

// arr = arr.filter((value, index, self) =>
//   index === self.findIndex((t) => (
//     t._id === value._id && t.name === value.name
//   ))
// )

// Cara ke 2 menggunakan for loop
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].friends.length; j++) {
        if (data[i].friends[j].name === 'Theresia') {
            arr.push(data[i])
        }
    }
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j].name === arr[j + 1].name) {
            arr.splice(j, 1)
        }
    }
}
console.log(arr);

// 8) display hobby id 1 dari friends yang isActive nya true
console.log("--------- 8 ---------");

let hobby = data.map(x => {
  return x.friends.filter(y => {
    return y.isActive === true && y.hobby.filter(z => z.id === 1)
  })
})
console.log(hobby);

// 9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball
console.log("--------- 9 ---------");

let person = data.filter(x => {
  return x.eyeColor === 'brown' && x.friends.filter(y => {
    return y.favoriteFruit === 'banana' && y.hobby.some(z => z.hobby === 'basketball')
  })
})
console.log(person);

// 10) display person yang mempunya friends gender male atau favorite fruit nya banana dan registered di tahun 2023
console.log("--------- 10 ---------");

let personFriend = data.filter(x => {
  return parseInt(x.registered.substring(0, 4)) === 2023 && x.friends.filter(y => {
    y.gender === 'male' || y.favoriteFruit === 'banana'
  })
})
console.log(personFriend);