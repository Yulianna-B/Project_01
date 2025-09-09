import './App.css'
import AgeInfo from './components/AgeInfo/AgeInfo';
import Greeting from './components/Greeting/Greeting'
import Task from './components/Task/Task'

function App() {
  return (
    <div>
     <p>Hello, React!</p>
<Greeting />
<Greeting />
<Greeting />
<Task name={"Bob"}/>
<Task name={"John"} />
<AgeInfo age={24} name ={"Yulianna"} />
<AgeInfo age={26} name ={"Andrey"} />
<p>LIVE</p>
  </div>
  );
}

export default App;




