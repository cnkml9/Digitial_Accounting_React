import { InternalApiService } from "../../ApiServices/InternalApiService";
import { FORGOT_PASSWORD } from "../../../Utilities/Constants/ApiEndPointConstants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ForgotPasswordDispatcher = createAsyncThunk(
  "identity/forgot-password",
  async ({ email }, thunkAPI) => {
    return InternalApiService.PostAsync(FORGOT_PASSWORD.uri, false, {
      email,
    })
      .then((response) => {
        console.log(response);
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

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ForgotPasswordDispatcher.pending, (state) => {
        state.isLoading = true;
        state.rejected = false;
        state.success = false;
        state.payload = {};
      })
      .addCase(ForgotPasswordDispatcher.rejected, (state, action) => {
        state.isLoading = false;
        state.rejected = true;
        state.success = false;
        state.payload = action.payload;
      })
      .addCase(ForgotPasswordDispatcher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rejected = false;
        state.success = true;
        state.payload = action.payload;
      })
      .addDefaultCase((state) => state);
  },
});
export const ForgotPasswordSelector = (state) => state.forgotPasswordState;
export default forgotPasswordSlice.reducer;