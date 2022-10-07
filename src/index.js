/* import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import App from './1_Introduction/App'
// import App from './2_JavaScript/App'
// import App from './3_Component_state_events/App'
import App from './4_More_complex_state_debugging/App'
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 */
// index.js for new example

/* import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './Component_state_events/App'

// let counter = 1

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App counter={counter} />
// )

let counter = 1

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}

// refresh()
// counter += 1
// refresh()
// counter += 1
// refresh()

setInterval(() => {
  refresh()
  counter += 1
}, 1000) */

// below for part1 start

/* import React from 'react'
import ReactDOM from 'react-dom'
// import App from './3_Component_state_events/App'
import App from './4_More_complex_state_debugging/App'


ReactDOM.render(<App />, document.getElementById('root')) */

// below for part1 exercises

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

// import App from './1_Introduction/App'
// import App from './2_JavaScript/App'
// import App from './3_Component_state_events/App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)