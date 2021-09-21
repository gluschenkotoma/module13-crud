const base_url = `http://localhost:3004`
let path = `/users`
let url = base_url + path
console.log(url)
//GET
fetch(url)
  .then(response => {
    // console.log('1then', response) //сделали запрос и получили response
    if (response.status === 200) return response.json()
    if (response.status !== 200) throw new Error(response.json())
  })
  .then(data => {
    // console.log('2then', data)
  })
  .catch(err => {
    // console.log('catch', err)
  })

//POST
// const obj = {
//   name: 'user',
//   age: 18,
// }

// const option = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(obj),
// }
// fetch(url, option).then(response => console.log('POST', response))

//PATCH
// let myId = 's5kDOSf'

// const options = {
//   method: 'PATCH',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ age: 20 }),
// }

// fetch(`${url}/${myId}`, options)
//   .then(response => {
//     // console.log('PATCH', response)
//     return response.json()
//   })
//   .then(data => {
//     // console.log(data)
//   })

//СТРЕЛОЧНАЯ фу-я GET
// const getUsers = () => {
//   fetch(url)
//     .then(response => {
//       // console.log('1-then:', response)
//       if (response.status === 200) return response.json()
//       if (response.status !== 200) throw new Error(response.status)
//     })
//     .then(data => {
//       //   console.log('2-then:', data)
//     })
//     .catch(err => {
//       //   console.log('CATCH:', err)
//     })
// }

// GET asynk
const getUsers = async () => {
  try {
    const response = await fetch(url) //промис
    // console.log('async response', response)
    const data = await response.json() //данные
    console.log('GET async data', data)
  } catch (err) {
    console.log(err)
  }
}
// getUsers()

//async POST
const obj = {
  name: 'tomato',
  age: 18,
}

// const options = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(obj),
// }

const addNewUser = async () => {
  try {
    const response = await fetch(url, options) //промис
    console.log('POST async response', response) //- POST async response Response {type: 'cors', url: 'http://localhost:3004/users', redirected: false, status: 201, ok: true, …}
    const tomato = await response.json() //данные
    console.log('POST async data', tomato) //-POST async data {name: 'tomato', age: 18, id: 'guhsZrM'}
  } catch (err) {
    console.log(err)
  }
}
// addNewUser()

// PATCH
let myId = `_OoRpiV`
options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'lemon', age: 38 }),
}

const updateUser = async () => {
  try {
    const res = await fetch(`${url}/${myId}`, options)
    const result = await res.json()
    console.log('PATCH async data', result)
    //   fetch(`${url}/${myId}`, options)
    //     .then(response => {
    //       console.log(response)
    //       return response.json()
    //     })
    //     .then(data => {
    //       console.log(data)
    //     })
  } catch (err) {
    console.log(err)
  }
}
// updateUser()
