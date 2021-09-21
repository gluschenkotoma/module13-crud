import refs from './refs'
import FetchObject from './functions'
const { loadMoreBtn, list, form } = refs

const BASE_URL = `https://api.pexels.com/v1`
let ednPoint = `/search`
const API_KEY = `563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2`
const options = {
  headers: {
    Authorization: API_KEY,
  },
}

const myFetch = new FetchObject(BASE_URL, ednPoint, options)
// console.log(myFetch)
myFetch.getFetchBySubmit(form, list)
myFetch.getFetchByClick(loadMoreBtn, list)
