export function calculateWinnerPlayer(squares) {
    const winnerSquares = calculateWinnerSquares(squares)

    if (winnerSquares) return squares[winnerSquares[0]]
    else if (!squares.includes(null)) return 'Empate'
}


export function calculateWinnerSquares(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i];
        }
    }
    return null;
}


export function createMatrix(squares, numRow, numCols) {
    return  Array(numCols).fill(0).map((r, y) => {
                return Array(numRow).fill(8).map((s, x) => squares[x + y * numRow]
                    )}
                )
}


