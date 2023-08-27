import { Board } from "./Board"
import { TURNS } from '../turns'
import { useState } from "react"
import { HistoryPanel } from "./History/HistoryPanel"
import { calculateWinnerPlayer } from "../utils"


export default function Game() {
    const [turn, setTurn] = useState(TURNS.X)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)

    const currentSquares = history[currentMove]
    const winner = calculateWinnerPlayer(currentSquares)

    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);

        const nextPlayer = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(nextPlayer)     
    }

    const moveTo = (move) => {
        setCurrentMove(move)
        setTurn(move % 2 === 0 ? TURNS.X : TURNS.O)
    }

    return (
        <>
            <h1>Triqui 🐶</h1>
            <p style={{visibility: winner ? '' : 'hidden'}}>{'Ganador!: ' + winner}</p>
            <div className="game">
                <Board nextPlayer={turn} onPlayTurn={handlePlay} squares={currentSquares}></Board>
                <HistoryPanel onItemClick={moveTo} history={history} currentMove={currentMove}/>
            </div>
        </>
    )
}

/*<button onClick={() => setTurn(TURNS.X)}>X</button>
            <p>Turn: {turn}</p>
            <button onClick={() => setSquares(Array(9).fill(''))}>Reset</button>*/