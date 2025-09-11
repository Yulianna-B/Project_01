import './App.css'
import AgeInfo from './components/AgeInfo/AgeInfo';
import Counter from './components/Counter/Counter';
import DogCard from './components/DogCard/DogCard';
import Greeting from './components/Greeting/Greeting'
import PersonalGreeting from './components/PersonalGreeting/PersonalGreeting';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Task from './components/Task/Task'

function App() {
  return (
    <div>
   <PersonalGreeting />
<Greeting />
<Counter />
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




