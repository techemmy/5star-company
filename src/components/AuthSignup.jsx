import AuthInput from "./AuthInput";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <section className="auth_page-side--right">

      <nav>
        <div className="text-icon" onClick={() => { navigate(-1) }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="#757575" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <p>Return Home</p>
        </div>
        <div className="login">
          <p>Already a member? <Link to="/login">LOG IN NOW</Link></p>
        </div>
      </nav>

      <form>
        <article>
          <h2>BECOME AN EXCLUSIVE MEMBERS</h2>
          <p>SIGN UP and join the partnership </p>
        </article>

        <AuthInput icon="user" type="text" placeholder="Johnson Doe" />
        <AuthInput icon="email" type="email" placeholder="example@email.com" />
        <AuthInput icon="password" type="password" placeholder="********" />
        <Button text="Become a Member" />
      </form>

      <nav>
        <p className="copyright">Copyright 2021 - 2022 5Starcompany. All rights Reserved</p>
        <div className="text-icon">
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1.2" viewBox="0 0 24 24"
            id="Info">
            <path
              d="M13.839 17.525c-.006.002-.559.186-1.039.186-.265 0-.372-.055-.406-.079-.168-.117-.48-.336.054-1.4l1-1.994c.593-1.184.681-2.329.245-3.225-.356-.733-1.039-1.236-1.92-1.416a4.776 4.776 0 0 0-.958-.097c-1.849 0-3.094 1.08-3.146 1.126a.5.5 0 0 0 .493.848c.005-.002.559-.187 1.039-.187.263 0 .369.055.402.078.169.118.482.34-.051 1.402l-1 1.995c-.594 1.185-.681 2.33-.245 3.225.356.733 1.038 1.236 1.921 1.416.314.063.636.097.954.097 1.85 0 3.096-1.08 3.148-1.126a.5.5 0 0 0-.491-.849z"
              fill="#9e9e9e" className="color000000 svgShape"></path>
            <circle cx="13" cy="6.001" r="2.5" fill="#9e9e9e" className="color000000 svgShape"></circle>
          </svg>
          <p>Need help?</p>
        </div>
      </nav>

    </section>
  )
}
