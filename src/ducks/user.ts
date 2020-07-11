import { createAction, handleActions } from "redux-actions";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { RootState, UserState } from "../types/store";
import { User } from "../types/user";
// import { authSelectors } from ".";

const USER_RECEIVED = "user/userReceived";

export const userReceived = createAction(USER_RECEIVED);

export const getUser = () => {
  return (
    dispatch: ThunkDispatch<UserState, void, Action>,
    getState: () => RootState
  ): Promise<User> => {
    // const accessToken = authSelectors.getAccessToken()(getState());
    // Simulate API request, in real app you pass access token
    return new Promise(resolve =>
      setTimeout(() => resolve({ id: "1", name: "Adam" }), 1000)
    ).then((user: any) => {
      dispatch(userReceived(user));
      return user;
    });
  };
};

const initialState: UserState = {
  user: null
};

export default handleActions(
  {
    [USER_RECEIVED]: (state: UserState, { payload }: any): UserState => {
      return {
        ...state,
        user: payload
      };
    }
  },
  initialState
);

export const selectors = {
  getUser: () => (state: RootState): User | null => {
    return state.user.user;
  }
};
