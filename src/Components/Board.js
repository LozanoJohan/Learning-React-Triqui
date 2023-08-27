import { Square } from "./Square"
import '../index.css'
import { calculateWinnerPlayer, calculateWinnerSquares, createMatrix } from '../utils'

export function Board({ nextPlayer, squares, onPlayTurn}) {
    const NUM_ROWS = 3
    const NUM_COLS = NUM_ROWS

    const matrix = createMatrix(squares, NUM_ROWS, NUM_COLS)

    const handleClick = (index) => {
        if (squares[index] || calculateWinnerSquares(squares)) return

        const nextSquares = squares.slice()
        nextSquares[index] = nextPlayer

        onPlayTurn(nextSquares)
    }
    

    return (
        <>
            <div className="board">
                {matrix.map((row, y) => {
                    return <div className="row" key={y}>
                        {row.map((square, x) => {
                            const index = x + y * NUM_ROWS
                            const winner = calculateWinnerSquares(squares)?.includes(index)
                            return (
                                <Square key={index} onClick={() => handleClick(index)} winner={winner}>
                                    {square}
                                </Square>
                            )
                        })}
                    </div>
                })}
            </div>
        </>
    )
}