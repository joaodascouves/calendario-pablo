// essa lib deixa a gente estilizar os componentes
// sem precisar incluir um css externo
import styled from 'styled-components';

// container eh um elemento q serve
// de base para outros elementos

/*
    display: flex;
    → a propriedade display do css define como
        o elemento deve se comportar. existem várias
        (grid, table, inline, block, inline-block, etc).
        conhecer algumas é vital.

    flex-direction: row;
    → nossos elementos filhos se orientam por linhas.

    flex-wrap: wrap;
    → quebrar os elementos filhos para a linha de baixo ao
        atingir o limite do container.

    border: 1px solid black;
    → vide próxima explicação.
*/
export const CalendarContainer = styled.div`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    border: 1px solid black;
`;

// usei um trick nesse
// pseudoelemento after permite adicionar
// texto através de um atributo

/*
    position: relative;
    → faz com que mudanças de tamanho e posição
        sejam relativas à esse elemento, não ao elemento pai.

    padding: 4em;
    → 4em (1em = tamanho de um caractere) de espaçamento
        interno.

    border: 1px solid black;
    → 1px de borda com a cor sólida preta.

    border-collapse: collapse;
    → caso a borda colida, ela vira uma só.

    margin: -1px -1px 0 0;
    → apenas um fix para as bordas.

    &::before e &::after, respectivamente
    → são pseudo elementos do css
        equivalentes à "antes" e "depois" do elemento
        aqui foram usados para receber os dias da semana
        e do mês como atributos. a notação usando & é exclusiva
        da lib styled-components.

    &:hover
    → pseudo elemento equivalente à
        sobreposição do mouse. nesse caso,
        quando o mouse estiver sobre o elemento,
        muda a cor de fundo para cinza.
*/
export const CalendarDia = styled.div`
    position: relative;
    padding: 4em;

    border: 1px solid black;
    border-collapse: collapse;

    margin: -1px -1px 0 0;

    &::before {
        content: attr(data-diames);
        position: absolute;
        top: 1em;
        left: 1em;
    }

    &::after {
        content: attr(data-diasemana);
    }

    &:hover {
        background: grey;
    }
`;