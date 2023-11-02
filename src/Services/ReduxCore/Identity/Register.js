import { InternalApiService } from "../../ApiServices/InternalApiService";
import { SIGN_UP } from "../../../Utilities/Constants/ApiEndPointConstants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CookieHelper } from "../../../Utilities/Helpers/tokenInjector";
export const RegisterDispatcher = createAsyncThunk(
  "register/registerUser",
  async({ email, password, confirmPassword, firstName, lastName, title }, thunkAPI) => {
    return InternalApiService.PostAsync(SIGN_UP.uri, false, {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      title,
    }).then((response) => {
      CookieHelper.Inject(response.data.data, response.status);
      return  thunkAPI.fulfillWithValue(response.data);
    }).catch((error) => {
      return  thunkAPI.rejectWithValue(error.response.data);
    })
  }
);

const initialState = {
  isLoading: false,
  rejected: false,
  success: false,
  payload: {},
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterDispatcher.pending, (state) => {
        state.isLoading = true;
        state.success = false;
        state.rejected = false;
        state.payload = {};
      })
      .addCase(RegisterDispatcher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.rejected = false;
        state.payload = action.payload;
      })
      .addCase(RegisterDispatcher.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.rejected = true;
        state.payload = action.payload;
      })
      .addDefaultCase((state) => state);
  },
});

export const RegisterSelector = (state) => state.registerState;
export default registerSlice.reducer;
