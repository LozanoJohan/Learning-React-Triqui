import '../index.css'

export function Square({ children, onClick, winner }) {
    const color = winner ? '#111' : '#010101'
    return (
      <button className="square" onClick={onClick} style={{background: color}}>
        {children}
      </button>
    );
  }