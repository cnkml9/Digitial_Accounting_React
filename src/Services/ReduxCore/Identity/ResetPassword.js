import { InternalApiService } from "../../ApiServices/InternalApiService";
import { RESET_PASSWORD } from "../../../Utilities/Constants/ApiEndPointConstants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CookieHelper } from "../../../Utilities/Helpers/tokenInjector";
export const ResetPasswordDispatcher = createAsyncThunk(
  "identity/forgot-password",
  async ({ email, confirmPassword, password }, thunkAPI) => {
    let reqBody = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        token: JSON.parse(CookieHelper.GetCookieData('tokenInfo')).token
    }
    return InternalApiService.PostAsync(RESET_PASSWORD.uri, true, reqBody)
      .then((response) => {
        console.log(response);
        CookieHelper.CookieDeleteItem("userInfo")
        CookieHelper.CookieDeleteItem("tokenInfo")
        CookieHelper.CookieDeleteItem("roleInfo")
        return thunkAPI.fulfillWithValue(response.data);
      })
      .catch((error) => {
        console.log(error.response);
        return thunkAPI.rejectWithValue(error.response.data);
      });
  }
);
const initialState = {
  isLoading: false,
  rejected: false,
  success: false,
  payload: {},
};

const resetPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ResetPasswordDispatcher.pending, (state) => {
        state.isLoading = true;
        state.rejected = false;
        state.success = false;
        state.payload = {};
      })
      .addCase(ResetPasswordDispatcher.rejected, (state, action) => {
        state.isLoading = false;
        state.rejected = true;
        state.success = false;
        state.payload = action.payload;
      })
      .addCase(ResetPasswordDispatcher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rejected = false;
        state.success = true;
        state.payload = action.payload;
      })
      .addDefaultCase((state) => state);
  },
});
export const ResetPasswordSelector = (state) => state.resetPasswordState;
export default resetPasswordSlice.reducer;