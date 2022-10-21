// import Note from './components/Note'

// const App = ({ notes }) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>           <Note key={note.id} note={note} />        )}      </ul>
//     </div>
//   )
// }

// export default App


// part 2 b starts

// import { useState } from 'react'
// import Note from './components/Note'

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App 


// part2 b added HTML form

// import { useState } from 'react'
// import Note from './components/Note'

// const App = (props) => {
//     const [notes, setNotes] = useState(props.notes)
  
//     const addNote = (event) => {
//       event.preventDefault()
//       console.log('button clicked', event.target)
//     }
  
//     return (
//       <div>
//         <h1>Notes</h1>
//         <ul>
//           {notes.map(note => 
//             <Note key={note.id} note={note} />
//           )}
//         </ul>
//         <form onSubmit={addNote}>
//           <input />
//           <button type="submit">save</button>
//         </form>   
//       </div>
//     )
//   }


//   export default App 



// part2 b setnewnote added not working

// import { useState } from 'react'
// import Note from './components/Note'

// const App = (props) => {
//     const [notes, setNotes] = useState(props.notes)
//     const [newNote, setNewNote] = useState(
//       'a new note...'
//     ) 
  
//     const addNote = (event) => {
//       event.preventDefault()
//       console.log('button clicked', event.target)
//     }
  
//     return (
//       <div>
//         <h1>Notes</h1>
//         <ul>
//           {notes.map(note => 
//             <Note key={note.id} note={note} />
//           )}
//         </ul>
//         <form onSubmit={addNote}>
//           <input value={newNote} />
//           <button type="submit">save</button>
//         </form>   
//       </div>
//     )
//   }


//   export default App 


  // we have to register an event handler that synchronizes the changes
  // mow we can also add columns

// b notes
// import { useState } from 'react'
// import Note from './components/Note'

// const App = (props) => {
//     const [notes, setNotes] = useState(props.notes)
//     const [newNote, setNewNote] = useState('') 
//     const [showAll, setShowAll] = useState(true)

  
//     const addNote = (event) => {
//         event.preventDefault()
//         const noteObject = {
//           content: newNote,
//           date: new Date().toISOString(),
//           important: Math.random() < 0.5,
//           id: notes.length + 1,
//         }
      
//         setNotes(notes.concat(noteObject))
//         setNewNote('')
//       }
  

//     const handleNoteChange = (event) => {
//         console.log(event.target.value)
//         setNewNote(event.target.value)
//     }


//     const notesToShow = showAll
//         ? notes
//         : notes.filter(note => note.important === true)

//     return (
//         <div>
//             <h1>Notes</h1>
//             <div>
//             <button onClick={() => setShowAll(!showAll)}>
//                 show {showAll ? 'important' : 'all' }
//             </button>
//             </div>
//             <ul>
//             {notesToShow.map(note =>
//                 <Note key={note.id} note={note} />
//             )}
//             </ul>
//           <form onSubmit={addNote}>
//             <input
//               value={newNote}
//               onChange={handleNoteChange}
//             />
//             <button type="submit">save</button>
//           </form>   
//         </div>
//       )
//     }


//   export default App 

  // c notes
// import { useState } from 'react'
// import Note from './components/Note'

// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Note from './components/Note'






// const App = (props) => {
//     const [notes, setNotes] = useState(props.notes)
//     const [newNote, setNewNote] = useState('') 
//     const [showAll, setShowAll] = useState(true)

// const App = () => {  
//   const [notes, setNotes] = useState([])  
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)

  // useEffect(() => {    
  //   console.log('effect')    
  //   axios      
  //   .get('http://localhost:3001/notes')      
  //   .then(response => {       
  //      console.log('promise fulfilled')        
  //      setNotes(response.data)      })  }, [])  
  //      console.log('render', notes.length, 'notes')



      //  const hook = () => {
      //   console.log('effect')
      //   axios
      //     .get('http://localhost:3001/notes')
      //     .then(response => {
      //       console.log('promise fulfilled')
      //       setNotes(response.data)
      //     })
      // }
      
      // useEffect(hook, [])
      

      // even this way

  //     useEffect(() => {
  //       console.log('effect')
      
  //       const eventHandler = response => {
  //         console.log('promise fulfilled')
  //         setNotes(response.data)
  //       }
      
  //       const promise = axios.get('http://localhost:3001/notes')
  //       promise.then(eventHandler)
  //     }, [])
      


  
  //   const addNote = (event) => {
  //       event.preventDefault()
  //       const noteObject = {
  //         content: newNote,
  //         date: new Date().toISOString(),
  //         important: Math.random() < 0.5,
  //         id: notes.length + 1,
  //       }
      
  //       setNotes(notes.concat(noteObject))
  //       setNewNote('')
  //     }
  

  //   const handleNoteChange = (event) => {
  //       console.log(event.target.value)
  //       setNewNote(event.target.value)
  //   }


  //   const notesToShow = showAll
  //       ? notes
  //       : notes.filter(note => note.important === true)

  //   return (
  //       <div>
  //           <h1>Notes</h1>
  //           <div>
  //           <button onClick={() => setShowAll(!showAll)}>
  //               show {showAll ? 'important' : 'all' }
  //           </button>
  //           </div>
  //           <ul>
  //           {notesToShow.map(note =>
  //               <Note key={note.id} note={note} />
  //           )}
  //           </ul>
  //         <form onSubmit={addNote}>
  //           <input
  //             value={newNote}
  //             onChange={handleNoteChange}
  //           />
  //           <button type="submit">save</button>
  //         </form>   
  //       </div>
  //     )
  //   }


  // export default App 

// ----------------------------------------------------------------------

  // 2.4 vrsion


  import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App


