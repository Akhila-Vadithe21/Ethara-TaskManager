import { useState } from "react";
import axios from "axios";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email,
          password,
        }
      );

      alert(res.data.message);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      alert(res.data.message);

      setIsLogin(true);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  if (isLogin) {
    return <Dashboard setIsLogin={setIsLogin} />;
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Ethara Task Manager</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p className="bottom-text">
          Don't have an account?

          <span onClick={handleRegister}> Register</span>
        </p>
      </div>
    </div>
  );
}

export default App;