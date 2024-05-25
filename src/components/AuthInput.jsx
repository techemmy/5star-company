export default function AuthInput({ icon, type, placeholder }) {
  const input = type !== "password" ? (
    <input id={`${icon}-icon`} type={type} placeholder={placeholder} name={type} aria-label={`${type} input`}
      autoComplete="off" />
  ) : (
    <div className="password-field">
      <input id={`${icon}-icon`} type={type} placeholder={placeholder} name={type} aria-label={`${type} input`}
        autoComplete="off" />
      <span id="show-password">SHOW</span>
    </div>
  )

  return input
}
