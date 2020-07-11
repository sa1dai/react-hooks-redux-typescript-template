import { createAction, handleActions } from "redux-actions";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { RootState, AuthState } from "../types/store";

const ACCESS_TOKEN_RECEIVED = "auth/accessTokenReceived";

export const accessTokenReceived = createAction(ACCESS_TOKEN_RECEIVED);

export const passwordAuth = (password: string) => {
  return (
    dispatch: ThunkDispatch<AuthState, void, Action>
  ): Promise<string> => {
    // Simulate API request, in real app you pass password
    return new Promise(resolve =>
      setTimeout(() => resolve({ token: "jsdm22asdfll" }), 2000)
    ).then(({ token }: any) => {
      dispatch(accessTokenReceived(token));
      return token;
    });
  };
};

const initialState: AuthState = {
  accessToken: null
};

export default handleActions(
  {
    [ACCESS_TOKEN_RECEIVED]: (
      state: AuthState,
      { payload }: any
    ): AuthState => {
      return {
        ...state,
        accessToken: payload
      };
    }
  },
  initialState
);

export const selectors = {
  getAccessToken: () => (state: RootState): string | null => {
    return state.auth.accessToken;
  },
  accessTokenReceived: () => (state: RootState): boolean => {
    return state.auth.accessToken != null;
  }
};
