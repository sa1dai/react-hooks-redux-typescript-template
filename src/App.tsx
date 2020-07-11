import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { authSelectors } from "./ducks";
import UserScreen from "./screens/UserScreen";
import AuthScreen from "./screens/AuthScreen";

export default function App() {
  const userAccessTokenReceived = useSelector(
    authSelectors.accessTokenReceived()
  );
  return <> {userAccessTokenReceived ? <UserScreen /> : <AuthScreen />}</>;
}
