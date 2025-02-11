export default function Button({ value, onUserClick, isHighlighted }) {
  return (
    <div
      className={isHighlighted ? "board__square highlighted" : "board__square"}
      onClick={onUserClick}
    >
      {value}
    </div>
  );
}
