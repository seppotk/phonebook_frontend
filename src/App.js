


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


// import React, { useState } from 'react';

// function App() {
//   const [ persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [ newName, setNewName ] = useState('')
//   const addPerson = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: newName
//     }
//     console.log(personObject)
//     setPersons(persons.concat(personObject))
//   }
//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }
//   const row_names = () => persons.map(person => 
//     <p key={person.name}>{person.name}</p>
//   )

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addPerson}>
//         <div>
//           name: <input
//             value={newName}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <>{row_names()}</>
//     </div>
//   )
// }

// export default App;

// 2.7: The Phonebook Step2
// if person is allready in list


// import React, { useState } from 'react';

// function App() {
//   const [ persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [ newName, setNewName ] = useState('')
//   const addPerson = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: newName
//     }
//     console.log(personObject)
// 	const all_names = persons.map(person => person.name)
//     if (all_names.includes(newName)) {
//       alert(`${newName} is already added to phonebook`)
//       return
//     }
//     setPersons(persons.concat(personObject))
// 	setNewName('')
//   }
//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }
//   const row_names = () => persons.map(person => 
//     <p key={person.name}>{person.name}</p>
//   )

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addPerson}>
//         <div>
//           name: <input
//             value={newName}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <>{row_names()}</>
//     </div>
//   )
// }

// export default App;

// 2.8: The Phonebook Step3
// Expand your application by allowing users to add phone numbers to the phone book

// import React, { useState } from 'react';

// function App() {
//   const [ persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '040-1234567' }
//   ]) 
//   const [ newName, setNewName ] = useState('')
//   const [ newNumber, setNewNumber ] = useState('')

//   const addPerson = (event) => {
//     event.preventDefault()
//     const personObject = {
// 	  name: newName,
// 	  number: newNumber
//     }

//     console.log(personObject)
// 	const all_names = persons.map(person => person.name)
//     if (all_names.includes(newName)) {
//       alert(`${newName} is already added to phonebook`)
//       return
//     }
//     setPersons(persons.concat(personObject))
// 	setNewName('')
// 	setNewNumber('')
//   }

//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value)
//   }
//   const row_names = () => persons.map(person => 
//     //<p key={person.name}>{person.name}</p>
// 	<p key={person.name}>{person.name} {person.number}</p>
//   )

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addPerson}>
//         <div>
//           name: <input
//             value={newName}
//             onChange={handleNameChange}
//           />
//         </div>
// 		<div>
//           number: <input
//             value={newNumber}
//             onChange={handleNumberChange}
//           />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <>{row_names()}</>
//     </div>
//   )
// }

// export default App;


// 2.9*: The Phonebook Step4
// filter

// import React, { useState } from 'react';

// function App() {
//   const [ persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
//   ]) 
//   const [ newName, setNewName ] = useState('')
//   const [ newNumber, setNewNumber ] = useState('')
//   const [ filter, setFilter ] = useState('')

//   const addPerson = (event) => {
//     event.preventDefault()
//     const personObject = {
// 	  name: newName,
// 	  number: newNumber
//     }

//     console.log(personObject)
// 	const all_names = persons.map(person => person.name)
//     if (all_names.includes(newName)) {
//       alert(`${newName} is already added to phonebook`)
//       return
//     }
//     setPersons(persons.concat(personObject))
// 	setNewName('')
// 	setNewNumber('')
//   }

//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value)
//   }

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value)
//   }
//   const personsToShow = filter === ''
//     ? persons
//     : persons.filter(person =>
//     person.name.toLowerCase().includes(filter.toLowerCase()))

//   const row_names = () => personsToShow.map(person => 
// 	<p key={person.name}>{person.name} {person.number}</p>
//   )

//   return (
//     <div>
//       <h2>Phonebook</h2>
// 	  <div>
//         filter shown with <input
//           value={filter}
//           onChange={handleFilterChange}
//         />
//       </div>
//       <h2>add a new</h2>
//       <form onSubmit={addPerson}>
//         <div>
//           name: <input
//             value={newName}
//             onChange={handleNameChange}
//           />
//         </div>
// 		<div>
//           number: <input
//             value={newNumber}
//             onChange={handleNumberChange}
//           />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <>{row_names()}</>
//     </div>
//   )
// }

// export default App;

// 2.10: The Phonebook Step5

import React, { useState } from 'react';
import Filter from './P2_b_forms/components/filter';
import PersonForm from './P2_b_forms/components/personform';
import Persons from './P2_b_forms/components/persons'

function App() {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
	  name: newName,
	  number: newNumber
    }

    console.log(personObject)
	const all_names = persons.map(person => person.name)
    if (all_names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(personObject))
	setNewName('')
	setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  const personsToShow = filter === ''
    ? persons
    : persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase()))

  const row_names = () => personsToShow.map(person => 
	<p key={person.name}>{person.name} {person.number}</p>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        name={{value: newName, onChange: handleNameChange}}
        number={{value: newNumber, onChange: handleNumberChange}}
      />
      <h2>Numbers</h2>
      <Persons persons={row_names()} />
    </div>
  )
}

export default App;