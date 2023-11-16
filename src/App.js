import './App.css';
import TodoApp from './components/todo/TodoApp.jsx'
import Counter from './components/counter/Counter.jsx'


function App() { // its like main function : 
  return (
    <div className = 'App'>
      {/* <TodoApp/> */}
      <Counter/>
    </div>
  );
}

export default App; 
