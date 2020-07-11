import { useDispatch } from "react-redux";

import { store } from "../store";

/* See comment in definition of useDispatch:

 * Note for `redux-thunk` users: the return type of the returned `dispatch` functions for thunks is incorrect.
 * However, it is possible to get a correctly typed `dispatch` function by creating your own custom hook typed
 * from the store's dispatch function like this: `const useThunkDispatch = () => useDispatch<typeof store.dispatch>();`

 */
const useThunkDispatch = (): any => useDispatch<typeof store.dispatch>();

export default useThunkDispatch;
