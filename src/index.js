import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstComponent from './FirstComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/Login';
import RegisterComponent from './Components/Register';
import HomePage from './Components/Homepage';
import ContactPage from './Components/Contact';
import UseEffect from './Components/UseEffect';
import UseRef from './Components/UseRef';
import ApiCalls from './Components/apiCalls';
import Performance from './Components/performance';
import FirstClassComponent from './Components/classComponents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<FirstComponent/>}></Route>
                <Route path='/login' element={<LoginComponent/>}></Route>
                <Route path='/registration' element={<RegisterComponent />} ></Route>
                <Route path='/homepage' element={<HomePage/>}></Route>
                <Route path='/contact' element={<ContactPage/>}></Route>
                <Route path='/useeffect' element={<UseEffect/>}></Route>
                <Route path='/useRef' element={<UseRef/>}></Route>
                <Route path='/apiCalls' element={<ApiCalls/>}></Route>
                <Route path='/performance' element={<Performance />}></Route>
                <Route path='/classcomponent' element={<FirstClassComponent/>}></Route>
        </Routes>
    </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
