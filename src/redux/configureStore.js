import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialeState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux dev tools
  return createStore(
    rootReducer,
    initialeState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())),
  );
}
