export default function Button({ value, onUserClick }) {
  return (
    <div className="board__square" onClick={onUserClick}>
      {value}
    </div>
  );
}
