import logo from './logo.svg';
import './App.css';
import { SecondComponent } from './FirstComponent';
import RegisterComponent from './Components/Register';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {
  var a="hello"
  const navigate=useNavigate();
  return (
    <div >
      <NavBar />
      <h1>{a}</h1>
      <SecondComponent/>
      <div>
        <button onClick={()=>{navigate("/login")}}>Login</button>
        <button onClick={()=>{navigate("/registration")}}>Register</button>
        <Link to="/login">login</Link>
        <Link to="/registration">Register</Link>
      </div>
      {/* <RegisterComponent/> */}
    </div>
  );
}

export default App;
