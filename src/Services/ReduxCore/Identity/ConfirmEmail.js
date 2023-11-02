import { InternalApiService } from "../../ApiServices/InternalApiService";
import { RESET_PASSWORD } from "../../../Utilities/Constants/ApiEndPointConstants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CookieHelper } from "../../../Utilities/Helpers/tokenInjector";
export const ConfirmEmailDispatcher = createAsyncThunk(
  "identity/forgot-password",
  async ({ code }, thunkAPI) => {
    let query = `?userId=${JSON.parse(
      CookieHelper.GetCookieData("userInfo").id
    )}&code=${code}`;
    return InternalApiService.GetAsync(RESET_PASSWORD.uri+query, true)
      .then((response) => {
        CookieHelper.CookieDeleteItem("userInfo");
        CookieHelper.CookieDeleteItem("tokenInfo");
        CookieHelper.CookieDeleteItem("roleInfo");
        return thunkAPI.fulfillWithValue(response.data);
      })
      .catch((error) => {
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

const confirmEmailSlice = createSlice({
  name: "forgotPassword",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ConfirmEmailDispatcher.pending, (state) => {
        state.isLoading = true;
        state.rejected = false;
        state.success = false;
        state.payload = {};
      })
      .addCase(ConfirmEmailDispatcher.rejected, (state, action) => {
        state.isLoading = false;
        state.rejected = true;
        state.success = false;
        state.payload = action.payload;
      })
      .addCase(ConfirmEmailDispatcher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rejected = false;
        state.success = true;
        state.payload = action.payload;
      })
      .addDefaultCase((state) => state);
  },
});
export const ForgotPasswordSelector = (state) => state.confirmEmailState;
export default confirmEmailSlice.reducer;
