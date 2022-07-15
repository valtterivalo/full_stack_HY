const Header = (props) => {
    return (
        <h1>
            {props.course}
        </h1>
        )
}

const Content = (props) => {
    const partElements = [];
    props.parts.forEach(val => partElements.push(<Part key={val.name} part={val.name} exercises={val.exercises}/>))
    return (
        <div>
            {partElements}
        </div>
    )
}

const Total = (props) => {
    let sum = 0;
    props.parts.forEach(val => sum += val.exercises)
    return (
        <p>Number of exercises {sum}</p>
    )
}

const Part = (props) => {
    return (
            <p>{props.part} {props.exercises}</p>
    )

}

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
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default App