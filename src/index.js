import React from "react";
import ReactDOM from 'react-dom';
import Calculator from "./main/Calculator";
import './index.css'

ReactDOM.render(
    <div>
         <h1 id="title">Calculadora</h1>
         <Calculator />
    </div>,
    document.getElementById('root'));