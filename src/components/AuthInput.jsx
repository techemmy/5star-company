import React from "react";

export default function AuthInput({ icon, type, placeholder }) {

  React.useEffect(() => {
    if (type === "password") {
      const showPasswordBtn = document.getElementById('show-password');
      showPasswordBtn.onclick = (event) => {
        const inputState = event.target.previousElementSibling;
        if (inputState.type === "password") {
          inputState.type = "text";
          event.target.innerText = "HIDE";
        } else {
          inputState.type = "password";
          event.target.innerText = "SHOW";
        }
      }
    }
  })

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
