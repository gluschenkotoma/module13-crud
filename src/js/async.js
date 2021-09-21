console.log(`async`)
// FUCNTION
// try {
// fetch === Promise
// .then  === Promise
// .then  === Promise
// .then  === Promise
// .then  === Promise
// .....
// } catch () {
// .catch === Promise
// }

// async FUCNTION
// response = await fetch
// data = await then
// result = await then

const base_url = `http://localhost:3004`
let path = `/users`
// path = `/products`

let url = base_url + path
console.log(url)
// try {} catch(){}
// GET
const getUsers = async () => {
  try {
    const response = await fetch(url)
    // console.log('async response', response.status)
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
// getUsers()

// POST
const obj = {
  name: 'async user',
  age: 28,
}
let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj),
}

const addNewUser = async () => {
  try {
    const res = await fetch(url, options)
    console.log(res)
    const result = await res.json()
    console.log(result)
    // const x = result.map() - тут уже await не нужен!!!
  } catch (err) {
    console.log(err)
  }
}
// addNewUser()

// PATCH
let myId = `GTYwQc7`
options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Bob Marly' }),
}

const updateUser = async () => {
  try {
    const res = await fetch(`${url}/${myId}`, options)
    console.log(res)
    const result = await res.json()
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}
// updateUser()

// PUT
myId = `qweartdfyg`
options = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({}),
}
const replaceUserData = async () => {
  try {
    const res = await fetch(`${url}/${myId}`, options)
    console.log(res)
    const result = await res.json()
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}
// replaceUserData()
// DELETE
myId = `qweartdfyg`
const options1 = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
}

const deleteUser = async () => {
  try {
    const res = await fetch(`${url}/${myId}`, options1)
    console.log(res)
    const result = await res.json()
    console.log('delete', result)
  } catch (err) {
    console.log(err)
  }
}
deleteUser()
