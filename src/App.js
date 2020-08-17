// o arquivo App.js eh o nosso componente principal
// eh necessario importar o React em todos os componentes
import React from 'react';


// vamos importar o nosso componente para inclusao na tela principal
// se a gente colocar so a pasta e omitir o arquivo
// vai buscar automaticamente o index.js
import Calendar from './components/calendar';

// o componente exporta uma função
// que retorna obrigatoriamente um HTML entre aspas
export default function App() {

    // a vantagem do react e outras frameworks de javascript
    // eh justamente a possibilidade de componetizar todo o sistema
    // ou seja, mexer em um elemento separado em vez de precisar
    // abrir um codigo imenso

    // agora vamos fazer o calendario
    // primeiro ele precisa ter uma forma

    // vamos criar um componente chamado calendario
    // mkdir -p components/calendar/ <---- nomes sempre em ingles
    // cd components/calendar/
    // touch index.js styles.js

    return (
        <div>
            { /* isso eh um comentario */ }
            { /* depois de incluir o componente */ }
            { /* a gente usa ele em forma de uma tag DOM (html) */ }
            <Calendar nome="Pablo" cor="blue" />
        </div>
    )
}

// pra rodar direto do vscode
// a gente abre o terminal e digita npm start