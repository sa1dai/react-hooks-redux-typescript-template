import React, { useState } from "react";
import useThunkDispatch from "../hooks/useThunkDispatch";
import { authActions } from "../ducks";
import "../styles.css";

export default function AuthScreen() {
  const thunkDispatch = useThunkDispatch();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onLoginPress = () => {
    setLoading(true);
    thunkDispatch(authActions.passwordAuth(password));
  };
  return (
    <div className="Container">
      <h1>Login</h1>
      <h2>Input password (any symbols)</h2>
      <div style={styles.inputContainer}>
        <input value={password} onChange={onChangePassword} />
      </div>
      <button onClick={onLoginPress} disabled={loading}>
        {loading ? "Login..." : "Login"}
      </button>
    </div>
  );
}

const styles = {
  inputContainer: {
    marginBottom: 10
  }
};
