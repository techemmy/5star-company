export default function Button({ text }) {
  return (
    <button type="submit">
      <span>{text}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h13M12 5l7 7-7 7" />
      </svg>
    </button>
  )
}
