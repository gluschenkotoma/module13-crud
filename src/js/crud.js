console.log(`crud`)
// Create   Read    Update        Delete
// POST     GET     PUT || PATCH  DELETE

const base_url = `http://localhost:3004`
let path = `/users`
// path = `/products`

let url = base_url + path
console.log(url)

// GET
const getUsers = () => {
  fetch(url)
    .then(response => {
      // console.log('1-then:', response)
      if (response.status === 200) return response.json()
      if (response.status !== 200) throw new Error(response.status)
    })
    .then(data => {
      console.log('2-then:', data)
    })
    .catch(err => {
      console.log('CATCH:', err)
    })
}
// getUsers()

// POST
const obj = {
  name: 'user',
  age: 18,
}
let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj),
}

const addNewUser = () => {
  fetch(url, options).then(response => {
    console.log(response)
  })
}
// addNewUser()

// PATCH
let myId = `Rl29YDs`
options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ age: 20, name: 'Bob' }),
}

const updateUser = () => {
  fetch(`${url}/${myId}`, options)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
}
// updateUser()

// PUT
myId = `Rl29YDs`
options = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Sally' }),
}

const replaceUserData = () => {
  fetch(`${url}/${myId}`, options)
    .then(response => {
      console.log('PUT resp', response)
    })
    .catch(err => {
      console.log(err)
    })
}
// replaceUserData()

// DELETE
myId = `Rl29YDs`
const options1 = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
}
const deleteUser = () => {
  fetch(`${url}/${myId}`, options1)
    .then(res => {
      console.log('DELETE: ', res)
      return res.json()
    })
    .then(d => console.log(d))
}
deleteUser()
