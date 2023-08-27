import { TURNS } from "../../turns"

export function HistoryItem({move, onClick, currentMove}) {
    const turn = move % 2 === 0 ? TURNS.X : TURNS.O

    function moveDescription (move) {

        if (move === 0) {
            return `Ir al inicio del juego`
        } else if (move === currentMove) {
            return `Estás en el movimiento ${move}`
        } else {
            return `Ir al movimiento ${move}`
        }
    }


    return ( 
        <li key={move}>
            <button onClick={() => onClick(move)}>{moveDescription(move) + ` ${turn}`}</button>
        </li>
    )
}