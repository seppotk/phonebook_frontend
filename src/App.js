// 1.1 Course Information, Step 1


// const App = () => {
//     const course = 'Half Stack application development'
//     const part1 = 'Fundamentals of React'
//     const exercises1 = 10
//     const part2 = 'Using props to pass data'
//     const exercises2 = 7
//     const part3 = 'State of a component'
//     const exercises3 = 14
  
//     return (
//       <div>
//           <Header course = {course} />
//           <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
//           <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
//       </div>
//     )
//   };
  
//   const Header = (props) => {
//       return (
//           <div>
//               <h1>{props.course}</h1>
//           </div>
//       )
//   };
  
//   const Content = (props) => {
//       return (
//           <div>
//               <p>
//                   {props.part1}: {props.exercises1}
//               </p>
//               <p>
//                   {props.part2}: {props.exercises2}
//               </p>
//               <p>
//                   {props.part3}: {props.exercises3}
//               </p>
//           </div>
//       )
//   };
  
//   const Total = (props) => {
//       return (
//           <div>
//               <p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
//           </div>
//       )
//   };

//   export default App



  // 1.2 Course Information, Step 2

//   const App = () => {
//     const course = 'Half Stack application development'

//     return (
//       <div>
//           <Header course = {course} />
//           <Content />
//           <Total />
//       </div>
//     )
// };

// const Header = (props) => {
//   return (
//       <div>
//           <h1>{props.course}</h1>
//       </div>
//   )
// };

// const Total = () => {
//   var num = 0
  
//   for (var i = 0; i < PartLists.length; i++) {
//       num = num + PartLists[i].exercises
//   }
  
//   return (
//       <div>
//           <p>Number of exercises: {num}</p>
//       </div>
//   )
// };

// const Content = () => {
//   const lists = PartLists.map(
//       function(list) {
//           return (
//               <div key={list.id}>
//                   <Part part={list.part} exercises={list.exercises} />
//               </div>
//           )
//       })
  
//   return lists
// };

// const Part = (props) => {
//   return (
//       <div>
//           <p>
//               {props.part}: {props.exercises}
//           </p>
//       </div>
//   )
// };

// const PartLists = [
//   {
//       id: 1,
//       part: 'Fundamentals of React',
//       exercises: 10
//   },
//   {
//       id: 2,
//       part: 'Using props to pass data',
//       exercises: 7
//   },
//   {
//       id: 3,
//       part: 'State of a component',
//       exercises: 14
//   }
// ];


//   export default App



  //  1.3 Course Information, Step 3


//   const App = () => {
//     const course = 'Half Stack application development'
//     const part1 = {
//       name: 'Fundamentals of React',
//       exercises: 10
//     }
//     const part2 = {
//       name: 'Using props to pass data',
//       exercises: 7
//     }
//     const part3 = {
//       name: 'State of a component',
//       exercises: 14
//     }
  
//     return (
//       <div>
//         <h1>{course}</h1>
//         <p>{part1.name}: {part1.exercises}</p>
//         <p>{part2.name}: {part2.exercises}</p>
//         <p>{part3.name}: {part3.exercises}</p>
//         <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>
//       </div>
//     )
//   }

// export default App


// 1.4: course information step4


// const App = () => {
// 	const course = 'Half Stack application development'
// 	const parts = [
// 		{
// 		  name: 'Fundamentals of React',
// 		  exercises: 10
// 		},
// 		{
// 		  name: 'Using props to pass data',
// 		  exercises: 7
// 		},
// 		{
// 		  name: 'State of a component',
// 		  exercises: 14
// 		}
// 	]

// 	return (
// 		<div>
// 			<Header course={course} />
// 			<Content parts={parts} />
// 			<Total parts={parts} />
// 		</div>
// 	)
// };

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1>{props.course}</h1>
// 		</div>
// 	)
// };

// const Content = (props) => {
// 	const lists = props.parts.map(function(item) {
// 		return (
// 			<div>
// 				<p> {item.name}: {item.exercises}</p>
// 			</div>
// 		)
// 	})
	
// 	return lists
// };

// const Total = (props) => {
//     var score = 0
	
// 	const lists = props.parts.map(function(item) {

//         score = score + item.exercises
//         return score
// 	})
	
// 	return (
// 		<div>
// 			<p>Number of exercises: {lists.score} </p>
// 		</div>
// 	)
// };


// export default App


// 1.5: course information step4



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
// 				<div key={list.id}>
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



// // 1.6 Unicafe Step 1

// import { useState } from 'react'

// const App = () => {
// 	const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)
	
// 	return (
// 		<div>
// 			<h1>Please Give Feedback, Thank you!</h1>
			
// 			<br />
			
// 			<button onClick = {() => setGood(good + 1)}>Good</button>
			
// 			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
			
// 			<button onClick = {() => setBad(bad + 1)}>Bad</button>
// 			<br />
// 			<br />
// 			<br />
// 			<h1>Statistics</h1>
// 			<br />
// 			<br />
// 			<br />
// 			<h3>Good: {good}</h3>
// 			<h3>Neutral: {neutral}</h3>
// 			<h3>Bad: {bad}</h3>
// 		</div>
// 	)
// }

// export default App



// 1.7 Unicafe Step 2

// import { useState } from 'react'

// const App = () => {
// 	const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)
	
// 	return (
// 		<div>
// 			<h1>Please Give Feedback, Thank you!</h1>
			
// 			<br />
			
// 			<button onClick = {() => setGood(good + 1)}>Good</button>
			
// 			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
			
// 			<button onClick = {() => setBad(bad + 1)}>Bad</button>
			
// 			<br />
			
// 			<h1>Statistics</h1>
			
// 			<br />
			
// 			<h3>Good: {good}</h3>
// 			<h3>Neutral: {neutral}</h3>
// 			<h3>Bad: {bad}</h3>
// 			<h3>All: {good + neutral + bad}</h3>
// 			<h3>Average: {(good - bad)/(good + neutral + bad)}</h3>
// 			<h3>Positive: {(good + neutral)/(good + neutral + bad)}</h3>
// 		</div>
// 	)
// }



// export default App


// 1.8 Unicafe Step 3
// own Statistics component

// import { useState } from 'react'

// const Statistics = (props) => {
// 	return (
// 		<div>
// 			<h3>Good: {props.good}</h3>
// 			<h3>Neutral: {props.neutral}</h3>
// 			<h3>Bad: {props.bad}</h3>
// 			<h3>All: {props.All}</h3>
// 			<h3>Average: {props.average}</h3>
// 			<h3>Positive: {props.positive}</h3>
// 		</div>
// 	)
// }

// const App = () => {
// 	const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)
	
// 	return (
// 		<div>
// 			<h1>Please Give Feedback, Thank you!</h1>
			
// 			<br />
			
// 			<button onClick = {() => setGood(good + 1)}>Good</button>
			
// 			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
			
// 			<button onClick = {() => setBad(bad + 1)}>Bad</button>
			
// 			<br />
			
// 			<h1>Statistics</h1>
			
// 			<br />
			
// 			<Statistics 
// 				good={good} 
// 				neutral= {neutral} 
// 				bad= {bad} 
// 				All= {good + neutral + bad} 
// 				average= {(good - bad)/(good + neutral + bad)} 
// 				positive= {(good + neutral)/(good + neutral + bad)}
// 			/>
// 		</div>
// 	)
// }

// export default App



// // 1.9 Unicafe Step 4

// import { useState } from 'react'

// const Statistics = (props) => {
// 	if (props.All === 0) {
// 		return (
// 			<div>
// 				<h1>No Feedback Given Now</h1>
// 			</div>
// 		)
// 	} 
	
// 	return (
// 		<div>
// 			<h3>Good: {props.good}</h3>
// 			<h3>Neutral: {props.neutral}</h3>
// 			<h3>Bad: {props.bad}</h3>
// 			<h3>All: {props.All}</h3>
// 			<h3>Average: {props.average}</h3>
// 			<h3>Positive: {props.positive}</h3>
// 		</div>
// 	)
// }

// const App = () => {
// 	const [good, setGood] = useState(0)
// 	const [neutral, setNeutral] = useState(0)
// 	const [bad, setBad] = useState(0)
	
// 	return (
// 		<div>
// 			<h1>Please Give Feedback, Thank you!</h1>
			
// 			<br />
			
// 			<button onClick = {() => setGood(good + 1)}>Good</button>
			
// 			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
			
// 			<button onClick = {() => setBad(bad + 1)}>Bad</button>
			
// 			<br />
			
// 			<h1>Statistics</h1>
			
// 			<br />
			
// 			<Statistics 
// 				good={good} 
// 				neutral= {neutral} 
// 				bad= {bad} 
// 				All= {good + neutral + bad} 
// 				average= {(good - bad)/(good + neutral + bad)} 
// 				positive= {(good + neutral)/(good + neutral + bad)}
// 			/>
// 		</div>
// 	)
// }

// export default App


// // 1.10 and 1.11: unicafe step5 and step6


// import { useState } from 'react'

// const Feedback = ( {goodClick, neutralClick, badClick}) => {
//     return(
//         <div>
//             <h1>Feedback</h1>
//             <Button handler={goodClick} text={"good"}></Button>
//             <Button handler={neutralClick} text={"neutral"}></Button>
//             <Button handler={badClick} text={"bad"}></Button>
//         </div>
//     )
// }

// const Button = ({ handler, text }) => {
//     return (
//         <button onClick={() => handler(1)}>{text}</button>
//     )
// }
// const Statistics = ({ goodValue, neutralValue, badValue, total, averageValue }) => {
//     if (total === 0){
//         return(<div>No Feedback Given Now</div>)
//     }
//     return (
//         <div>
//             <StatisticLine statType={goodValue} text={"good"}></StatisticLine>
//             <StatisticLine statType={neutralValue} text={"neutral"}></StatisticLine>
//             <StatisticLine statType={badValue} text={"bad"}></StatisticLine>
//             <StatisticLine statType={total} text={"total"}></StatisticLine>
//             <StatisticLine statType={averageValue} text={"average"}></StatisticLine>
//         </div>
//     )
// }

// const StatisticLine = ({ statType, text }) => {
//     return (

//     <table>
//     <tbody>
//       <tr>
//         <td>{text}</td>
//         <td>{statType}</td>

//       </tr>
//     </tbody>
//   </table>

//     );
//   };

// const App = () => {
//     // save clicks of each button to its own state
//     const [good, setGood] = useState(0)
//     const [neutral, setNeutral] = useState(0)
//     const [bad, setBad] = useState(0)

//     const incGood = (newValue) => setGood(good+newValue)
//     const incNeutral = (newValue) => setNeutral(neutral+newValue)
//     const incBad = (newValue) => setBad(bad+newValue)

//     return (
//         <div>
//             <Feedback
//                 goodClick={incGood}
//                 neutralClick={incNeutral}
//                 badClick={incBad}>
//             </Feedback>

//             <Statistics
//                 goodValue = {good}
//                 neutralValue = {neutral}
//                 badValue={bad}
//                 total = {good + neutral + bad}
//                 averageValue ={(good - bad)/(good + neutral + bad)}
//             />

//         </div>
//     )
// }

// export default App




// 1.12*: anecdotes step1

// import { useState } from 'react'
// const App = () => {
// 	const [index, setIndex] = useState(0)
	
// 	const anecdotes = [
// 		'If it hurts, do it more often',
// 		'Adding manpower to a late software project makes it later!',
// 		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
// 		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
// 		'Premature optimization is the root of all evil.',
// 		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// 	]
	
// 	const handleChange = () => {
// 		setIndex(Math.floor(Math.random()*anecdotes.length))
// 	}
	
// 	return (
// 		<div>
// 			<button onClick = {handleChange}>Click Me!!!</button>
// 			<h1>{anecdotes[index]}</h1>
// 		</div>
// 	)
// }


// export default App


// // 1.13*: anecdotes step2

// import { useState } from 'react'

// const App = () => {
// 	const [index, setIndex] = useState(0)
// 	const [vote, setVote] = useState([0,0,0,0,0,0])
	
// 	const anecdotes = [
// 		'If it hurts, do it more often',
// 		'Adding manpower to a late software project makes it later!',
// 		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
// 		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
// 		'Premature optimization is the root of all evil.',
// 		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// 	]
	
// 	const handleChange = () => {
// 		setIndex(Math.floor(Math.random()*anecdotes.length))
// 	}
	
// 	const voteChange = () => {
// 		let copy = [...vote]
		
// 		copy[index]++
		
// 		setVote(copy)
// 	}
	
// 	return (
// 		<div>
// 			<button onClick = {handleChange}>Next Anecdotes!!!</button>
			
// 			<br />
// 			<br />
// 			<br />
			
// 			<button onClick = {voteChange}>Vote</button>
			
// 			<h1>{anecdotes[index]}</h1>
// 			<h1>Has {vote[index]} Votes</h1>
// 		</div>
// 	)
// }

// export default App

// 1.14*: anecdotes step3

import { useState } from 'react'

const App = () => {
	const [index, setIndex] = useState(0)
	const [vote, setVote] = useState({
		0: 0,
		1: 0,
		2: 0,
		3: 5,
		4: 0,
		5: 0
	})
	
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
	]
	
	const handleChange = () => {
		setIndex(Math.floor(Math.random()*anecdotes.length))
	}
	
	const voteChange = () => {
		setVote({
			...vote,
			[index]: vote[index]+1
		})
	}
	
	const findMax = () => {
		let max = -1, maxKey = -1
		
		for(let key in vote) {
			if (vote[key] > max) {
				maxKey = key
				max = vote[key]
			}
		}
		return maxKey
	}
	
	return (
		<div>
			<h1>Anecdote of the Day</h1>
			
			<button onClick = {handleChange}>Next Anecdotes!!!</button>
			
			<br />
			<br />
			
			<button onClick = {voteChange}>Vote</button>
			
			<h2>{anecdotes[index]}</h2>
			<h3>Has {vote[index]} Votes</h3>
			
			<br />
			
			<h1>Anecdote with most Votes</h1>
			<h3>{anecdotes[findMax()]}</h3>
		</div>
	)
}


export default App
