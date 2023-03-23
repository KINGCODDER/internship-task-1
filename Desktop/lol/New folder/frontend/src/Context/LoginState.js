import React, { useState } from "react";
import LoginContext from "./LoginContext";

const LoginState = (props) => {
  const [show, setShow] = useState(false);

  const handleLogin = () => {
    setShow(true);
  };
  return (
    <LoginContext.Provider value={{ show, handleLogin }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;
