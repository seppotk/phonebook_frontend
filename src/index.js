/* import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />) */

// this is for notes

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './P2_a_rendering_a_collection_modules/App'
// import App from './P2_b_forms/App'
// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true
//   }
// ] 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App notes={notes} />
// )



// this is for part2 

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'



// ReactDOM.createRoot(document.getElementById('root')).render(<App />)


// this is used for Part 2 c server
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import App from './P2_c_getting_data_from_server/App'
// // import App from './App'
// import axios from 'axios'

// const promise = axios.get('http://localhost:3001/notes')

// promise.then(response => {
//   console.log(response)
// })


// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

// axios.get('http://localhost:3001/notes').then(response => {
//   const notes = response.data
//   ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
// })


// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// 2.4 version



import ReactDOM from 'react-dom/client'
// import App from './App'
import App from './P2_c_getting_data_from_server/App'
import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes} />
  )
})
