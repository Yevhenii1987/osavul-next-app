export default function ButtonArrow({ classes, onClick }) {
  return (
    <button className={classes + ' button-arrow'} onClick={onClick}>
      <svg className="button-arrow__box" width="92" height="64" viewBox="0 0 92 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="button-arrow__arrow" d="M47 24L55 32L47 40" stroke="#03001C" strokeWidth="4" strokeLinecap="square" />
        <path className="button-arrow__arrow--sm" d="M39 29L42 32L39 35" stroke="#03001C" strokeWidth="4" strokeLinecap="square" />
      </svg>
    </button>
  )
}
