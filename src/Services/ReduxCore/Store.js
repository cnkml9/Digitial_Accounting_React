import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "./Identity/Register";
import forgotPasswordReducer from "./Identity/ForgotPassword"
import loginReducer from './Identity/Login';
import resetPasswordReducer from './Identity/ResetPassword';
import confirmEmailReducer from './Identity/ConfirmEmail';
import thunk from "redux-thunk";
import logger from "redux-logger";
const rootReducer = combineReducers({
    registerState: registerReducer,
    loginState: loginReducer,
    forgotPasswordState: forgotPasswordReducer,
    resetPasswordState: resetPasswordReducer,
    confirmEmailState: confirmEmailReducer, 
});
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger]
});

export default store;
