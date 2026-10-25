import React, { useState } from "react";
import "../css/Login.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출로 인한 새로고침 방지

    console.log("btn click event");
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">로그인</button>
      </form>
      <p id="message">{error}</p>
    </div>
  );
};

export default Login;
