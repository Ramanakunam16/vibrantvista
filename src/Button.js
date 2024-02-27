export function Button({ textColor, onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
