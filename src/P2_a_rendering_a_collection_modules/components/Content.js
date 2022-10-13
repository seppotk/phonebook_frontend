import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  const rows = () => parts.map(part =>
    <Part
      key={part.id}
      part={part}
    />
  )

  const sum = () => parts.reduce((acc, part) =>
  acc + part.exercises, 0) 
  // var sum = 0
  // for (var i = 0; i < parts.length; i++){
  //   sum = sum + parts[i].exercises
  // }
  // seuraavassa ota pois sulut sum()


  return (
    <>
      {rows()}
      <p><b>total of {sum()} exercises</b></p>
    </>
  )
}

export default Content;