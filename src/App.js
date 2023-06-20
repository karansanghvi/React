import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
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

      {/* event handling in function components */}
      <FunctionClick/>

      {/* event handling in class components */}
      <ClassClick/>

      {/* binding event handlers */}
      <EventBind/>

      {/* method as props: if we want to access child component with parent component */}
      <ParentComponent/>

      {/* conditional rendering */}
      <UserGreeting/>

      {/* list rendering */}
      <NameList/>
    </div>
  );
}

export default App;
