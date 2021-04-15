import Exercise from './exercise/Exercise';
import Bonus from './bonus/Bonus';

function App() {
  return (
    <div> 
      <Exercise />
      <Exercise good="Awesome" bad="Terrible" />
      <Bonus />

    </div>
  );
}

export default App;
