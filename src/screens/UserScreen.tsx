import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useThunkDispatch from "../hooks/useThunkDispatch";
import { userActions } from "../ducks";
import "../styles.css";
import { userSelectors } from "../ducks";

export default function UserScreen() {
  const thunkDispatch = useThunkDispatch();
  const user = useSelector(userSelectors.getUser());
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // you can use thunkDispath not only for async actions but for sync actions too (like USER_RECEIVED action)
    thunkDispatch(userActions.getUser()).finally(() => setLoading(false));
  }, [thunkDispatch]);
  return (
    <div className="Container">
      <h1>User</h1>
      {loading ? <h2>Loading...</h2> : <h2>{user?.name}</h2>}
    </div>
  );
}
