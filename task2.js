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

let personRegis = data.filter(person => {
  return person.registered.substring(0, 4) < "2022"
})
console.log(personRegis);

// 2) display person yang address nya Bali
console.log("--------- 2 ---------");

let personAddress = data.filter(person => {
  return person.address === 'Bali'
})
console.log(personAddress);

// 3) display friends yang hobby nya football
console.log("--------- 3 ---------");

let arrHobby = []
let friendHobby = data.map(person => {
  person.friends.map(friend => {
    friend.hobby.find(({ hobby }) => {
      hobby === "football" ? arrHobby.push(friend) : undefined
    })
  })
})

// remove duplicate object
for (let i = 1; i < arrHobby.length; i++) {
  let j = i;

  while (j > 0 && arrHobby[j - 1] === arrHobby[j]) {
    arrHobby.splice(j, 1)
  }
}

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
console.log(arrHobby);

// 4) display hobby dari friends id 2
console.log("--------- 4 ---------");

let arrId = []
let friendId = data.map(person => {
  person.friends.map(friend => {
    friend.hobby.find(hobby => {
      friend.id === 2 ? arrId.push(friend.hobby) : undefined
    })
  })
})

// remove duplicate object
for (let i = 1; i < arrId.length; i++) {
  let j = i;

  while (j > 0 && arrId[j - 1] === arrId[j]) {
    arrId.splice(j, 1)
  }
}

console.log(arrId);

// 5) display friends yang gender nya male dan mempunya hobby basketball
console.log("--------- 5 ---------");

let arrGender = []
let genderHobby = data.map(person => {
  person.friends.map(friend => {
    friend.hobby.find(({ hobby }) => {
      friend.gender === "male" && hobby === "basketball" ? arrGender.push(friend) : undefined
    })
  })
})

// remove duplicate object
for (let i = 1; i < arrGender.length; i++) {
  let j = i;

  while (j > 0 && arrGender[j - 1] === arrGender[j]) {
    arrGender.splice(j, 1)
  }
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
console.log(arrGender);

// 6) display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry
console.log("--------- 6 ---------");

let arrFriend = []
let friends = data.map(person => {
  person.friends.map(friend => {
    friend.isActive === true && friend.gender === "female" && friend.favoriteFruit === "strawberry" ? arrFriend.push(friend) : undefined
  })
})

console.log(arrFriend);

// 7) display siapa saja yang mempunya teman name Theresia
console.log("--------- 7 ---------");

let arrFriends = []

// Cara 1 dengan method
let getFriend = data.map(person => {
  person.friends.map(friend => {
    friend.name === "Theresia" ? arrFriends.push(person) : undefined
  })
})

// Cara ke 2 menggunakan for loop
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].friends.length; j++) {
//         if (data[i].friends[j].name === 'Theresia') {
//             arrFriends.push(data[i])
//         }
//     }
// }

// remove duplicate object
for (let i = 0; i < arrFriends.length; i++) {
    for (let j = 0; j < arrFriends.length - i - 1; j++) {
        if (arrFriends[j].name === arrFriends[j + 1].name) {
            arrFriends.splice(j, 1)
        }
    }
}
console.log(arrFriends);

// 8) display hobby id 1 dari friends yang isActive nya true
console.log("--------- 8 ---------");

let arrHobbies = []
let hobby = data.map(person => {
  person.friends.map(friend => {
    friend.hobby.find((hobby) => {
      hobby.id === 1 && friend.isActive === true ? arrHobbies.push(hobby) : undefined
    })
  })
})

console.log(arrHobbies);

// 9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball
console.log("--------- 9 ---------");

let arrPerson = []
let person = data.map(person => {
  person.friends.map(friend => {
    friend.hobby.find(({ hobby }) => {
      person.eyeColor === "brown" && friend.favoriteFruit === "banana" && hobby === "basketball" ? arrPerson.push(person) : undefined
    })
  })
})

// remove duplicate object
for (let i = 0; i < arrPerson.length; i++) {
  for (let j = 0; j < arrPerson.length - i - 1; j++) {
    if (arrPerson[j].name === arrPerson[j + 1].name) {
      arrPerson.splice(j, 1)
    }
  }
}

console.log(arrPerson);

// 10) display person yang mempunya friends gender male atau favorite fruit nya banana dan registered di tahun 2023
console.log("--------- 10 ---------");

let arrPersonFriend = []
let personFriend = data.map(person => {
  person.friends.map(friend => {
    (friend.gender === "male" || friend.favoriteFruit === "banana") && person.registered.substring(0, 4) === "2023" ? arrPersonFriend.push(person) : undefined
  })
})

// remove duplicate object
for (let i = 0; i < arrPersonFriend.length; i++) {
  for (let j = 0; j < arrPersonFriend.length - i - 1; j++) {
    if (arrPersonFriend[j].name === arrPersonFriend[j + 1].name) {
      arrPersonFriend.splice(j, 1)
    }
  }
}

console.log(arrPersonFriend);