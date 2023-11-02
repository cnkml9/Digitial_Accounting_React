import { InternalApiService } from "../../ApiServices/InternalApiService";
import { LOGIN } from "../../../Utilities/Constants/ApiEndPointConstants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CookieHelper } from "../../../Utilities/Helpers/tokenInjector";

export const LoginDispatcher = createAsyncThunk(
    "identity/login",
    async ({email, password}, thunkAPI) => {
        return InternalApiService.PostAsync(LOGIN.uri, false, {
            email,
            password
        }).then((response) => {
            console.log(response)
            CookieHelper.Inject(response.data.data, response.status);
            return thunkAPI.fulfillWithValue(response.data);
        }).catch((error) => {
            console.log(error.response);
            return thunkAPI.rejectWithValue(error.response.data);
        })
    }
)

const initialState = {
    isLoading: false,
    rejected: false,
    success: false,
    payload: {}
}

const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(LoginDispatcher.pending, (state) => {
            state.isLoading = true;
            state.rejected = false;
            state.success = false;
            state.payload = {}
        })
        .addCase(LoginDispatcher.rejected, (state, action) => {
            state.isLoading = false;
            state.rejected = true;
            state.success = false;
            state.payload = action.payload
        })
        .addCase(LoginDispatcher.fulfilled, (state, action) => {
            state.isLoading = false;
            state.rejected = false;
            state.success = true;
            state.payload = action.payload
        })
        .addDefaultCase((state) => state);
    }

})

export const LoginSelector = (state) => state.loginState;
export default loginSlice.reducer;