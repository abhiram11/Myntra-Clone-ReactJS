import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { LoginBox, LoginContainer } from "./LoginElements";
import { loginUser } from "../../redux";
// import {connect} from "re"

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  console.log("Props.userinCompo : ", props.usernameInComponent);

  return (
    <>
      <LoginContainer>
        <LoginBox>
          <h3>
            Login To <span style={{ color: "red" }}>Myntra</span>🎉
          </h3>
          <input
            placeholder="Enter your Name 🤠"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Enter your Password 💬"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={
              () => {
                if (username.length === 0) {
                  alert("Please enter a username!");
                } else {
                  dispatch(loginUser(username));
                }
              }
              //   alert(`username: ${username} and password: ${password}`);}
            }
          >
            Login
          </button>
          <p>P.S. This is a dummy login, you can enter anything!</p>
        </LoginBox>
      </LoginContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usernameInComponent: state.loginUserReducer.username,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUser: (username) => dispatch(loginUser(username)),
//   };
// };

export default connect(mapStateToProps)(Login);
