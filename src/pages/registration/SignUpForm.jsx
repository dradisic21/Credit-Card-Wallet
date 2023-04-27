import React, { useState } from "react";
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import { LockOutlined, LockOpenOutlined } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "./SignUpForm.scss";

export function SignUpForm (){
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOpenLock, setShowOpenLock] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="registration-container">
        <form onSubmit={handleSubmit} className="registration-form">
        <h2>Create your account</h2>
        <label htmlFor="firstName">Full Name</label>
        <div className="user-input">
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Full Name"
            />
            <PersonOutlineOutlinedIcon className="user-icon"/>
          </div>
          <label htmlFor="lastName">Username</label>
          <div className="user-input">
            <Input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              placeholder="Username"
            />
            <PersonOutlineOutlinedIcon className="user-icon"/>
          </div>
          <label htmlFor="email">Email</label>
          <div className="email-input">
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
          <EmailOutlinedIcon className="email-icon" />
          </div>
          
          <label htmlFor="password">Password</label>
          <div className="password-input">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          <div
            className="password-icon-container"
            onClick={toggleShowPassword}
            onMouseEnter={() => setShowOpenLock(true)}
            onMouseLeave={() => setShowOpenLock(false)}
           
          >
            {showOpenLock ? (
              <LockOpenOutlined className="password-icon" />
            ) : (
              <LockOutlined className="password-icon" />
            )}
          </div>
           </div>
          <div className="btn-position">
            <Button
              className="signup-button"
              type="submit"
              name="Signup"
            />
          </div>
        </form>
        <div className="signup-image"></div>
      </div>
  );
};
