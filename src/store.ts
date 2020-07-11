import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import auth from "./ducks/auth";
import user from "./ducks/user";

const logger = createLogger({
  diff: true
});

const traceActionMiddleware = () => (next: any) => (action: any): any => {
  console.groupCollapsed(`Trace ${action.type}`);
  console.trace();
  console.groupEnd();
  return next(action);
};

const middlewares = [thunkMiddleware, traceActionMiddleware, logger];

declare global {
  interface Window {
    devToolsExtension: any;
  }
}

const rootReducer = combineReducers({
  auth,
  user
});

export const store = (function configureStore(initialState): any {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : (f: any): any => f
    )
  );
})();
