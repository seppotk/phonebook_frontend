// const App = () => {
//   console.log('Hello from component')
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

//   1.1 beginning


// const App = () => {
//     const course = 'Half Stack application development'
//     const part1 = 'Fundamentals of React'
//     const exercises1 = 10
//     const part2 = 'Using props to pass datakalle'
//     const exercises2 = 7
//     const part3 = 'State of a component'
//     const exercises3 = 14
  
//     return (
//       <div>
//         <h1>{course}</h1>
//         <p>
//           {part1} {exercises1}
//         </p>
//         <p>
//           {part2} {exercises2}
//         </p>
//         <p>
//           {part3} {exercises3}
//         </p>
//         <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//       </div>
//     )
//   }
  
// export default App

// -------------------------------------------------------------

// 1.1 answer

// const App = () => {
//     const course = 'Half Stack application development'
//     const part1 = 'Fundamentals of React'
//     const exercises1 = 10
//     const part2 = 'Using props to pass datakalle'
//     const exercises2 = 7
//     const part3 = 'State of a component'
//     const exercises3 = 14
  
//     return (
//         <div>
//             <Header course = {course} />
//             <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
//             <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
//         </div>
//       )
//   };
  

//   const Header = (props) => {
// 	return (
// 		<div>
// 			<h1>{props.course}</h1>
// 		</div>
// 	)
// };

// const Content = (props) => {
// 	return (
// 		<div>
// 			<p>
// 				{props.part1}: {props.exercises1}
// 			</p>
// 			<p>
// 				{props.part2}: {props.exercises2}
// 			</p>
// 			<p>
// 				{props.part3}: {props.exercises3}
// 			</p>
// 		</div>
// 	)
// };

// const Total = (props) => {
// 	return (
// 		<div>
// 			<p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
// 		</div>
// 	)
// };
// export default App

// // 1.3 answer

// const App = () => {
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


// -------------------------------------------------------------

// answer 1.4


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
// 	var score = 0
	
// 	const lists = props.parts.map(function(item) {
		
// 		score = score + item.exercises 
// 		return score
// 	})
	
// 	return (
// 		<div>
// 			<p>Number of exercises: {score} </p>
// 		</div>
// 	)
// };


// -------------------------------------------------------------

// 1.5 answer

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	}

	return (
		<div>
			<h1>{course.name}</h1>
			<Content course={course} />
			<Total course={course} />
		</div>
	)
};

const Content = (props) => {
	const lists = props.course.parts.map(function(item) {
		return (
			<div>
				<p>{item.name}: {item.exercises}</p>
			</div>
		)
	})
	
	return lists
};

// const Total = (props) => {
// 	var score = 0
	
// const lists = props.course.parts.map(function(item) {
		
// 		score = score + item.exercises
		
// 		return score
// 	})
	
// 	return (
// 		<div>
// 			<p>Number of exercises: {score}</p>
// 		</div>
// 	)
// };

const Total = (props) => {
    const total = props.course.parts.reduce((s, p) => s += p.exercises, 0);
    return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
    )
};

export default App


// other solution

// const Header = (props) => (
//     <h1>{props.course}</h1>
//   ) 
  
//   const Content = (props) => (
//     <>
//       <Part part={props.parts[0]} />
//       <Part part={props.parts[1]} />
//       <Part part={props.parts[2]} />
//     </>
//   )
  
//   const Part = (props) => (
//     <p>{props.part.name} {props.part.exercises}</p>
//   )
  
//   const Total = (props) => {
//     const total = props.parts.reduce((s, p) => s += p.exercises, 0);
//     return (
//       <p>Number of exercises {total}</p>
//     );
//   }
  
//   const App = () => {
//     const course = {
//       name: 'Half stack application development', 
//       parts: [
//         {
//           name: 'Fundamentals of React', 
//           exercises: 10
//         }, 
//         {
//           name: 'Using props to pass data', 
//           exercises: 7
//         }, 
//         {
//           name: 'State of a component', 
//           exercises: 14
//         }
//       ]
//     };
  
//     return (
//       <div>
//         <Header course={course.name} />
//         <Content parts={course.parts} />
//         <Total parts={course.parts} />
//       </div>
//     );
//   }


// export default App