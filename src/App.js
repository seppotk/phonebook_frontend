


// -----------------------------------------------------------------
// 2.1: Course information step6

//import { useState } from 'react'
// import Course from './P2_a_rendering_a_collection_modules/components/Course'

// const App = () => {
// 	const course = {
// 	  id: 1,
// 	  name: 'Half Stack application development',
// 	  parts: [
// 		{
// 		  name: 'Fundamentals of React',
// 		  exercises: 10,
// 		  id: 1
// 		},
// 		{
// 		  name: 'Using props to pass data',
// 		  exercises: 7,
// 		  id: 2
// 		},
// 		{
// 		  name: 'State of a component',
// 		  exercises: 14,
// 		  id: 3
// 		},
// 		{
// 	      name: 'Redux',
// 		  exercises: 11,
// 		  id: 4
// 		}
// 	  ]
// 	}
  
// 	return <Course course={course} />
//   }
  
// export default App


// -----------------------------------------------------------------
// 2.2: Course information step7
// Show also the sum of the exercises of the course


// import Course from './P2_a_rendering_a_collection_modules/components/Course'

// const App = () => {
// 	const course = {
// 	  id: 1,
// 	  name: 'Half Stack application development',
// 	  parts: [
// 		{
// 		  name: 'Fundamentals of React',
// 		  exercises: 10,
// 		  id: 1
// 		},
// 		{
// 		  name: 'Using props to pass data',
// 		  exercises: 7,
// 		  id: 2
// 		},
// 		{
// 		  name: 'State of a component',
// 		  exercises: 14,
// 		  id: 3
// 		},
// 		{
// 	      name: 'Redux',
// 		  exercises: 11,
// 		  id: 4
// 		}
// 	  ]
// 	}
  
// 	return <Course course={course} />
//   }
  
// export default App


// -----------------------------------------------------------------
//2.3*: Course information step8
// calculate the sum of exercises with the array method reduce
// look content.js

//2.4: Course information step9
// Let's extend our application to allow for an arbitrary number of courses:


// import Course from './P2_a_rendering_a_collection_modules/components/Course'


// const App = () => {
// 	const courses = [
// 	  {
// 		name: 'Half Stack application development',
// 		id: 1,
// 		parts: [
// 		  {
// 			name: 'Fundamentals of React',
// 			exercises: 10,
// 			id: 1
// 		  },
// 		  {
// 			name: 'Using props to pass data',
// 			exercises: 7,
// 			id: 2
// 		  },
// 		  {
// 			name: 'State of a component',
// 			exercises: 14,
// 			id: 3
// 		  },
// 		  {
// 			name: 'Redux',
// 			exercises: 11,
// 			id: 4
// 		  }
// 		]
// 	  }, 
// 	  {
// 		name: 'Node.js',
// 		id: 2,
// 		parts: [
// 		  {
// 			name: 'Routing',
// 			exercises: 3,
// 			id: 1
// 		  },
// 		  {
// 			name: 'Middlewares',
// 			exercises: 7,
// 			id: 2
// 		  }
// 		]
// 	  }
// 	]
  
// 	// return <Course course={course} />
// 	return (
// 		<div>
// 		  <Course courses={courses} />
// 		</div>
// 	  );

// }
  
// export default App

// 2.5: separate module



// 2.6: The Phonebook Step1


import React, { useState } from 'react';

function App() {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    console.log(personObject)
    setPersons(persons.concat(personObject))
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const row_names = () => persons.map(person => 
    <p key={person.name}>{person.name}</p>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>{row_names()}</>
    </div>
  )
}

export default App;