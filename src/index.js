// o "entrypoint" do nodeJS é o arquivo index.js
// eh o equivalente ao main.c do C

// esse index.js é basicamente um boilerplate
// ou seja, um código q raramente vai mudar
// vc so precisa decorar ele e reusar toda vez

// deps do react
import React from 'react';
import ReactDOM from 'react-dom';

// a tela principal do aplicativo
import App from './App';

ReactDOM.render(
    (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    ),

    document.getElementById('root')
);
