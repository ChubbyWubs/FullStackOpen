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
      <Header course={course.name}/>
      <Content 
      p1={course.parts[0].name} e1={course.parts[0].exercises} 
      p2={course.parts[1].name} e2={course.parts[1].exercises}
      p3={course.parts[2].name} e3={course.parts[2].exercises} />
      <Total e1={course.parts[0].exercises} e2={course.parts[1].exercises} e3={course.parts[2].exercises}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
  <div>
    <p>
      {props.p1} {props.e1}
    </p>
    <p>
      {props.p2} {props.e2}
    </p>
    <p>
      {props.p3} {props.e3}
    </p>
  </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
  )
}



export default App