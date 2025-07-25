export default function ButtonDark({ children, type = "button", onClick = () => { } }) {
  return <button type={type} className="button-dark" onClick={onClick}>{children}</button>;
}
