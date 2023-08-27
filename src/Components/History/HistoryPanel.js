import { useState } from "react"
import { HistoryItem } from "./HistoryItem"


export function HistoryPanel({history, onItemClick, currentMove}) {
    const [order, setOrder] = useState(true)
    const components = history.map( (_, move) => <HistoryItem move={move} onClick={onItemClick} currentMove={currentMove} key={move}></HistoryItem> )

    order ? components.slice() : components.reverse().slice()

    return (
        <div className="history">
            <h2>Historial</h2>

            <ul>{components}</ul>

            <button id="btnAlt" onClick={() => setOrder(!order)}>Alternar orden de movimientos</button>
        </div>
    )
}


