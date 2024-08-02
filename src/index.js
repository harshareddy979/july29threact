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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<FirstComponent/>}></Route>
                <Route path='/login' element={<LoginComponent/>}></Route>
                <Route path='/registration' element={<RegisterComponent />} ></Route>
                <Route path='/homepage' element={<HomePage/>}></Route>
        </Routes>
    </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
