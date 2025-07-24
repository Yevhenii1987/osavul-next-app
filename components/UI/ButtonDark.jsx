export default function ButtonDark({ children, onClick = () => { } }) {
  return <button className="button-dark" onClick={onClick}>{children}</button>;
}
