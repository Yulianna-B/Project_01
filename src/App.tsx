import './App.css'
import AgeInfo from './components/AgeInfo/AgeInfo';
import DogCard from './components/DogCard/DogCard';
import Greeting from './components/Greeting/Greeting'
import ProfileCard from './components/ProfileCard/ProfileCard';
import Task from './components/Task/Task'

function App() {
  return (
    <div>
     <p>Hello, React!</p>
<Greeting />
<Greeting />
<Greeting />
<DogCard />
<ProfileCard
        name="Anna Metzer"
        description="Your personal assistant"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
      />
<Task name={"Bob"}/>
<Task name={"John"} />
<AgeInfo age={24} name ={"Yulianna"} />
<AgeInfo age={26} name ={"Andrey"} />

<p>LIVE</p>
  </div>
  );
}

export default App;




