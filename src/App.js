import logo from './logo.svg';
import './App.css';
import { SecondComponent } from './FirstComponent';
import RegisterComponent from './Components/Register';

function App() {
  var a="hello"
  return (
    <div >
      <h1>{a}</h1>
      <SecondComponent/>
      <RegisterComponent/>
    </div>
  );
}

export default App;
