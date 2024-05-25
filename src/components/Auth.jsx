import AuthSignUp from "./AuthSignup";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
  React.useEffect(() => {
    const showPasswordBtn = document.getElementById('show-password');
    if (showPasswordBtn == null) return;

    showPasswordBtn.addEventListener('click', (event) => {
      const passwordField = event.target.previousElementSibling;
      if (passwordField.type == "password") {
        passwordField.type = "text";
        event.target.innerText = 'HIDE';
      } else {
        passwordField.type = "password";
        event.target.innerText = 'SHOW';
      }
    })
  }, [])

  return (
    <main className="auth_page">

      <section className="auth_page-side--left">
        <img className="company-logo" src="./company-logo.png" alt="Company Logo" />
        <img className="handshake" src="./handshake.svg" alt="Corporate HandShake" />
        <article>
          <h1>Partnership for Business Growth</h1>
          <p>Partnerships are pivotal for business growth, enabling companies to leverage mutual strengths, share risks,
            and capitalize on opportunities.</p>
        </article>
      </section>

      <Outlet />

    </main>

  )
}
