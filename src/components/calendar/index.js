// o componente sempre inicia importando o React
import React from 'react';
import { CalendarContainer, CalendarDia } from './styles';

// exporta uma função
// que retorna um DOM encapsulado entre aspas
export default function Calendar(props) {

    // essa lógica basicamente cria uma array contendo os dias da semana
    // e uma array contendo os dias do calendário
    const nomeDias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
    const dias = [];

    // são 31 dias, iniciando do 1
    for(let i=1; i<=31; i++) {

        // alimenta a array com o dia da semana equivalente
        // a notação % significa resto da divisão
        // o resto da divisão por 7 só pode ser um inteiro
        // entre 0 e 6, ou seja, o index da array nomeDias.
        dias.push(nomeDias[(i-1)%7]);
    }

    return (
        <CalendarContainer>
            {
                // para imprimir varios componentes
                // eg. uma lista de produtos, resultados de busca
                // usamos o metodo map
                dias.map((dia, index) => (
                    <CalendarDia data-diames={index+1} data-diasemana={dia} />
                ))
            }
        </CalendarContainer>
    );
}