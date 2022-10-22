


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

// import React, { useState } from 'react';
// import Filter from './P2_b_forms/components/filter';
// import PersonForm from './P2_b_forms/components/personform';
// import Persons from './P2_b_forms/components/persons'

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
//       <Filter value={filter} onChange={handleFilterChange} />
//       <h2>add a new</h2>
//       <PersonForm
//         onSubmit={addPerson}
//         name={{value: newName, onChange: handleNameChange}}
//         number={{value: newNumber, onChange: handleNumberChange}}
//       />
//       <h2>Numbers</h2>
//       <Persons persons={row_names()} />
//     </div>
//   )
// }

// export default App;


// 2.11: The Phonebook Step6

// import React, { useState, useEffect } from 'react'
// import Content from './P2_c_getting_data_from_server/components/Content_person'
// import Filter from './P2_c_getting_data_from_server/components/Filter_person'
// import Notification from './P2_c_getting_data_from_server/components/Notification'
// import PersonForm from './P2_c_getting_data_from_server/components/PersonForm'
// import personService from './P2_c_getting_data_from_server/services/persons'

// const App = () => {
//   const [ persons, setPersons] = useState([])
//   const [ allPersons, setAllPersons] = useState([])
//   const [ newName, setNewName ] = useState('')
//   const [ newNumber, setNewNumber ] = useState('')
//   const [newFilter, setNewFilter] = useState('')
//   const [message, setMessage] = useState(null)

//   useEffect(() => {
//     personService
//       .getAll()
//       .then(initialPersons => {
//       setAllPersons(initialPersons)
//     })
//   }, [])

//   const addPerson = (event) => {
//     event.preventDefault()
//     const person = allPersons.filter((person) =>
//         person.name === newName
//     )

//     const personToAdd = person[0]
//     const updatedPerson = { ...personToAdd, number: newNumber }

//     if (person.length !== 0) {
//       if (window.confirm(`${personToAdd.name} is already added to the phonebook, replace the old number with a new one ?`)) {
//         personService
//           .update(updatedPerson.id, updatedPerson).then(returnedPerson => {
//             console.log(`${returnedPerson.name} successfully updated`)
//             setAllPersons(allPersons.map(personItem => personItem.id !== personToAdd.id ? personItem : returnedPerson))
//             setNewName('')
//             setNewNumber('')
//             setMessage(
//               `${updatedPerson.name} was successfully updated`
//             )
//             setTimeout(() => {
//               setMessage(null)
//             }, 5000)
//           })
//           .catch((error) => {
//             console.log(error)
//             setAllPersons(allPersons.filter(person => person.id !== updatedPerson.id))
//             setNewName('')
//             setNewNumber('')
//             setMessage(
//               `[ERROR] ${updatedPerson.name} was already deleted from server`
//             )
//             setTimeout(() => {
//               setMessage(null)
//             }, 5000)
//           })
//       }
//     } else {
//         const personToAdd = {
//             name: newName,
//             number: newNumber
//           }
//           personService
//             .create(personToAdd)
//             .then(returnedPerson => {
//               setAllPersons(allPersons.concat(returnedPerson))
//               setNewName('')
//               setNewNumber('')
//               setMessage(
//                 `${newName} was successfully added`
//               )
//               setTimeout(() => {
//                 setMessage(null)
//               }, 5000)
//             })
//             .catch(error => {
//               setMessage(
//                 `[ERROR] ${error.response.data.error}`
//               )
//               setTimeout(() => {
//                 setMessage(null)
//               }, 5000)
//               console.log(error.response.data)
//             })
//     }
//   }

//   const deletePerson = (id) => {
//     const filteredPerson = allPersons.filter(person => person.id === id)
//     const personName = filteredPerson[0].name
//     const personId = filteredPerson[0].id
//     if (window.confirm(`Delete ${personName} ?`)) {
//       personService
//         .remove(personId)
//       console.log(`${personName} successfully deleted`)
//       setMessage(
//         `${personName} was successfully deleted`
//       )
//       setAllPersons(allPersons.filter(person => person.id !== personId))
//       setTimeout(() => {
//         setMessage(null)
//       }, 5000)
//     }
//   }

//   const handleNameChange = (event) => {
//     setNewName(event.target.value)
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value)
//   }

//   const handleFilterChange = (event) => {
//     setNewFilter(event.target.value)
//     const regex = new RegExp( newFilter, 'i' );
//     const filteredPersons = () => allPersons.filter(person => person.name.match(regex))
//     setPersons(filteredPersons)
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Notification message={message} />
//       <Filter value={newFilter} onChange={handleFilterChange} />
//       <h2>Add new person</h2>
//       <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
//       <h2>Numbers</h2>
//       <Content persons={persons} allPersons={allPersons} deletePerson={deletePerson} />
//     </div>
//   )
// }

// export default App


// 2.12* Data for countries, step1


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './P2_c_getting_data_from_server/components/Content_country'
import Filter from './P2_c_getting_data_from_server/components/Filter_country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

 useEffect(() => {
  axios
    .get('https://restcountries.com/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setAllCountries(response.data)
    })
}, [])

const handleFilterChange = (event) => {
  setNewFilter(event.target.value)
  if (newFilter) {
    const regex = new RegExp( newFilter, 'i' );
    const filteredCountries = () => allCountries.filter(country => country.name.match(regex))
    setCountries(filteredCountries)
  }
}

return (
  <div>
    <Filter value={newFilter} onChange={handleFilterChange} />
    <Content countries={countries} setCountries={setCountries} />
  </div>
)
}

export default App