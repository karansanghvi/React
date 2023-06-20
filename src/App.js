import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* functional component - props are also included with the variable name */}
      <Greet name = "Bruce" heroName = "Batman"> 
        <p>this is children props</p>
      </Greet>
      <Greet name = "Clark" heroName = "Superman">
        <button>Action</button>
      </Greet>
      <Greet name = "Diana" heroName = "Wonder Woman"/>

      {/* class component - props are also included with the variable name */}
      <Welcome name = "Bruce" heroName = "Batman"/>
      <Welcome name = "Clark" heroName = "Superman"/>
      <Welcome name = "Diana" heroName = "Wonder Woman"/>

      {/* jsx component */}
      <Hello/>

      {/* state */}
      <Message/>

      {/* setState */}
      <Counter/>
    </div>
  );
}

export default App;
