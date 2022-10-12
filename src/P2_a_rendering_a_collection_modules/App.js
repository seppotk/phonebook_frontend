
// import { useState } from "react";

// const App = () => {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button
//         onClick={() => {
//           setNumber(number + 15);
          
//           console.log(number);
//           alert(number);         
//         }}

//       >
//         +15
//       </button>
//     </>
//   );
// };

// export default App;

// -------------------------------------------------------------------

// part2 a first

// const App = (props) => {
//     const { notes } = props
  
//     return (
//       <div>
//         <h1>Notes</h1>
//         <ul>
//           <li>{notes[0].content}</li>
//           <li>{notes[1].content}</li>
//           <li>{notes[2].content}</li>
//         </ul>
//       </div>
//     )
//   }
  
//   export default App



  // ----------------------------------------------------------
  // const App = (props) => {
  //   const { notes } = props
  
  //   return (
  //     <div>
  //       <h1>Notes</h1>
  //       <ul>
  //         {notes.map(note => 
  //           <li>            {note.content}          </li>        )}
  //       </ul>
  //     </div>
  //   )
  // }

  // export default App


    // ----------------------------------------------------------

    // lets add the keys


  // const App = (props) => {
  //   const { notes } = props
  
  //   return (
  //     <div>
  //       <h1>Notes</h1>
  //       <ul>
  //         {notes.map(note => 
  //           <li key={note.id}>            {note.content}
  //           </li>
  //         )}
  //       </ul>
  //     </div>
  //   )
  // }




  // export default App


// ----------------------------------------------------------
// destructuring

// const App = ({ notes }) => {  return (
//   <div>
//     <h1>Notes</h1>
//     <ul>
//       {notes.map(note => 
//         <li key={note.id}>
//           {note.content}
//         </li>
//       )}
//     </ul>
//   </div>
// )
// }


// export default App


// ----------------------------------------------------------

// more

// const Note = ({ note }) => {  return (    <li>{note.content}</li>  )}
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

// ----------------------------------------------------------

// added Note.js

import Note from './components/Note'

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>           <Note key={note.id} note={note} />        )}      </ul>
    </div>
  )
}

export default App
  
  


