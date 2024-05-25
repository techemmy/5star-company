import { Outlet } from "react-router-dom";

export default function Auth() {

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
