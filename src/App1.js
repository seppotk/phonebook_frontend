
// const App = () => {
//   console.log('Hello from component')
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }



// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }





// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }



// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//     </div>
//   )
// }


// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }


// const Hello = (props) => {
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// 1.1

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
// 		<Header course = {course} />
// 		<Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
// 		<Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
//     </div>
//   )
// };




// const Header = (props) => {
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

// 1.2 exercise

const App = () => {
	  const course = 'Half Stack application development'

	  return (
		<div>
			<Header course = {course} />
			<Content />
			<Total />
		</div>
	  )
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
};

const Total = () => {
	var num = 0
	
	for (var i = 0; i < PartLists.length; i++) {
		num = num + PartLists[i].exercises
	}
	
	return (
		<div>
			<p>Number of exercises: {num}</p>
		</div>
	)
};

const Content = () => {
	const lists = PartLists.map(
		function(list) {
			return (
				<div key={list.id}>
					<Part part={list.part} exercises={list.exercises} />
				</div>
			)
		})
	
	return lists
};

const Part = (props) => {
	return (
		<div>
			<p>
				{props.part}: {props.exercises}
			</p>
		</div>
	)
};

const PartLists = [
	{
		id: 1,
		part: 'Fundamentals of React',
		exercises: 10
	},
	{
		id: 2,
		part: 'Using props to pass data',
		exercises: 7
	},
	{
		id: 3,
		part: 'State of a component',
		exercises: 14
	}
];



export default App
