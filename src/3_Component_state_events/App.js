

// 1.2

// const App = () => {
// 	  const course = 'Half Stack application development'

// 	  return (
// 		<div>
// 			<Header course = {course} />
// 			<Content />
// 			<Total />
// 		</div>
// 	  )
// };

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1>{props.course}</h1>
// 		</div>
// 	)
// };

// const Total = () => {
// 	var num = 0
	
// 	for (var i = 0; i < PartLists.length; i++) {
// 		num = num + PartLists[i].exercises
// 	}
	
// 	return (
// 		<div>
// 			<p>Number of exercises: {num}</p>
// 		</div>
// 	)
// };

// const Content = () => {
// 	const lists = PartLists.map(
// 		function(list) {
// 			return (
// 				<div>
// 					<Part part={list.part} exercises={list.exercises} />
// 				</div>
// 			)
// 		})
	
// 	return lists
// };

// const Part = (props) => {
// 	return (
// 		<div>
// 			<p>
// 				{props.part}: {props.exercises}
// 			</p>
// 		</div>
// 	)
// };

// const PartLists = [
// 	{
// 		id: 1,
// 		part: 'Fundamentals of React',
// 		exercises: 10
// 	},
// 	{
// 		id: 2,
// 		part: 'Using props to pass data',
// 		exercises: 7
// 	},
// 	{
// 		id: 3,
// 		part: 'State of a component',
// 		exercises: 14
// 	}
// ];

// export default App


// --------------------------------------------
// 

// const Hello = (props) => {
// 	return (
// 	  <div>
// 		<p>
// 		  Hello {props.name}, you are {props.age} years old
// 		</p>
// 	  </div>
// 	)
//   }
  
//   const App = () => {
// 	const name = 'Peter'
// 	const age = 10
  
// 	return (
// 	  <div>
// 		<h1>Greetings</h1>
// 		<Hello name="Maya" age={26 + 10} />
// 		<Hello name={name} age={age} />
// 	  </div>
// 	)
//   }
// export default App


// --------------------------------------------------------------

// const Hello = (props) => {
// 	const bornYear = () => {
// 	  const yearNow = new Date().getFullYear()
// 	  return yearNow - props.age
// 	}
  
// 	return (
// 	  <div>
// 		<p>
// 		  Hello {props.name}, you are {props.age} years old
// 		</p>
// 		<p>So you were probably born in {bornYear()}</p>
// 	  </div>
// 	)
//   }

//   const App = () => {
// 	const name = 'Peter'
// 	const age = 10
  
// 	return (
// 	  <div>
// 		<h1>Greetings</h1>
// 		<Hello name="Maya" age={26 + 10} />
// 		<Hello name={name} age={age} />
// 	  </div>
// 	)
//   }


//   export default App
  

  // --------------------------------------------------------------

  

//   const Hello = (props) => {
// 	const name = props.name;
// 	const age = props.age;
// 	const bornYear = () => new Date().getFullYear() - age;
  
// 	return (
// 	  <div>
// 		<p>Hello {name}, you are {age} years old</p>      <p>So you were probably born in {bornYear()}</p>
// 	  </div>
// 	)
//   }
  

//   const App = () => {
// 	const name = 'Peter'
// 	const age = 10
  
// 	return (
// 	  <div>
// 		<h1>Greetings</h1>
// 		<Hello name="Maya" age={26 + 10} />
// 		<Hello name={name} age={age} />
// 	  </div>
// 	)
//   }


//   export default App


  // --------------------------------------------------------------


//   const Hello = (props) => {
// 	const { name, age } = props
// 	const bornYear = () => new Date().getFullYear() - age
  
// 	return (
// 	  <div>
// 		<p>Hello {name}, you are {age} years old</p>
// 		<p>So you were probably born in {bornYear()}</p>
// 	  </div>
// 	)
//   }
  

//   const App = () => {
// 	const name = 'Peter'
// 	const age = 10
  
// 	return (
// 	  <div>
// 		<h1>Greetings</h1>
// 		<Hello name="Maya" age={26 + 10} />
// 		<Hello name={name} age={age} />
// 	  </div>
// 	)
//   }


//   export default App


    // --------------------------------------------------------------


// const Hello = ({ name, age }) => {
// 	const bornYear = () => new Date().getFullYear() - age
	
// 	return (
// 		<div>
// 		<p>
// 			Hello {name}, you are {age} years old
// 		</p>
// 		<p>So you were probably born in {bornYear()}</p>
// 		</div>
// 	)
// 	}
	

// 	const App = () => {
// 	const name = 'Peter'
// 	const age = 10
	
// 	return (
// 		<div>
// 		<h1>Greetings</h1>
// 		<Hello name="Maya" age={26 + 10} />
// 		<Hello name={name} age={age} />
// 		</div>
// 	)
// 	}


// export default App


// -----------------------------------------------------------------
// new example

/* const App = (props) => {
	const {counter} = props
	return (
	  <div>{counter}</div>
	)
  }
  
  export default App */


/* import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

export default App
 */
// -----------------------------------------------------------------

/* import { useState } from 'react'

const App = () => {
	const [ counter, setCounter ] = useState(0)
  
	setTimeout(
	  () => setCounter(counter + 1),
	  1000
	)
  
	console.log('rendering...', counter)
  
	return (
	  <div>{counter}</div>
	)
  }

  export default App */


  // -----------------------------------------------------------------

  /* import { useState } from 'react'

  const App = () => {
	const [ counter, setCounter ] = useState(0)
  
	const handleClick = () => {
	  console.log('clicked')
	}
  
	return (
	  <div>
		<div>{counter}</div>
		<button onClick={handleClick}>
		  plus
		</button>
	  </div>
	)
  }

  export default App
 */

  // -----------------------------------------------------------------

  /* import { useState } from 'react'

  const App = () => {
	const [ counter, setCounter ] = useState(0)
  
	return (
	  <div>
		<div>{counter}</div>
		<button onClick={() => setCounter(counter + 1)}>
		  plus
		</button>
		<button onClick={() => setCounter(0)}> 
		  zero
		</button>
	  </div>
	)
  }

  export default App
 */

  // -----------------------------------------------------------------

/*   import { useState } from 'react'
  const App = () => {
	const [ counter, setCounter ] = useState(0)
  
	const increaseByOne = () => setCounter(counter + 1)
	
	const setToZero = () => setCounter(0)
  
	return (
	  <div>
		<div>{counter}</div>
		<button onClick={increaseByOne}>
		  plus
		</button>
		<button onClick={setToZero}>
		  zero
		</button>
	  </div>
	)
  }

  export default App */

// -----------------------------------------------------------------
/* 
import { useState } from 'react'

const Display = (props) => {
	return (
	  <div>{props.counter}</div>
	)
  }


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )
}

export default App
 */

// -----------------------------------------------------------------

/* import { useState } from 'react'

const Display = (props) => {
	return (
	  <div>{props.counter}</div>
	)
  }

  const Button = (props) => {
	return (
	  <button onClick={props.onClick}>
		{props.text}
	  </button>
	)
  }

  const App = () => {
	const [ counter, setCounter ] = useState(0)
  
	const increaseByOne = () => setCounter(counter + 1)
	const decreaseByOne = () => setCounter(counter - 1)
	const setToZero = () => setCounter(0)
  
	return (
	  <div>
		<Display counter={counter}/>
		<Button
		  onClick={increaseByOne}
		  text='plus'
		/>
		<Button
		  onClick={setToZero}
		  text='zero'
		/>     
		<Button
		  onClick={decreaseByOne}
		  text='minus'
		/>           
	  </div>
	)
  }

export default App */

// -----------------------------------------------------------------
// defactoring

import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

  const App = () => {
	const [ counter, setCounter ] = useState(0)
  
	const increaseByOne = () => setCounter(counter + 1)
	const decreaseByOne = () => setCounter(counter - 1)
	const setToZero = () => setCounter(0)
  
	return (
	  <div>
		<Display counter={counter}/>
		<Button
		  onClick={increaseByOne}
		  text='plus'
		/>
		<Button
		  onClick={setToZero}
		  text='zero'
		/>     
		<Button
		  onClick={decreaseByOne}
		  text='minus'
		/>           
	  </div>
	)
  }

export default App

