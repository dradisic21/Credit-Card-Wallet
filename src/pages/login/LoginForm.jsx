import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import { LockOutlined, LockOpenOutlined } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import "./LoginForm.scss";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOpenLock, setShowOpenLock] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/home');
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <div className="username-input">
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Type your username"
          />
          <PersonOutlineOutlinedIcon className="user-icon"/>
        </div>
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Type your password"
          />
          <div
            className="password-icon-container"
            onMouseEnter={() => setShowOpenLock(true)}
            onMouseLeave={() => setShowOpenLock(false)}
            onClick={toggleShowPassword}
          >
            {showOpenLock ? (
              <LockOpenOutlined className="password-icon" />
            ) : (
              <LockOutlined className="password-icon" />
            )}
          </div>
        </div>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <div className="btn-position">
          <Button className="login-button" type="submit" name="Login" />
        </div>
        <div className="signup-link">
          Don't have an account yet?{" "}
          <Link className="link" to="signup">
            Join now
          </Link>
        </div>
      </form>
      <div className="login-image"></div>
    </div>
  );
}
