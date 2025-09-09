interface Props {
    name: string;
}

function Task(props:Props) {
    // const name = "Bob";
    const {name} = props;
    return <p>It was nice to see you, {name}!</p>
}

export default Task;

// props - properties - свойства 