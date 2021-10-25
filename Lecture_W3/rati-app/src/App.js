import logo from './logo.svg';
import './App.css';
import BasicProps from './component/BasicProps';
import ManyProps from './ManyProps';


function App() {
  return (
    <div>
      <Hello />
      <BasicProps name="changgi" age="23" />
      
    </div>
  );
}

export default App;
