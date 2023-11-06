
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signup, checkEmailDuplication, SignupRequest } from '../../services/AuthService';

interface SignupState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SignupState = {
  status: 'idle',
  error: null,
};

export const submitSignup = createAsyncThunk(
  'signup/submitSignup',
  async (userData: SignupRequest, { rejectWithValue }) => {
    try {
      const isEmailDuplicate = await checkEmailDuplication(userData.email);
      if (isEmailDuplicate) {
        return rejectWithValue('이메일이 중복됩니다.');
      }
      const response = await signup(userData);
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitSignup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitSignup.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(submitSignup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; 
      });
  },
});

export default signupSlice.reducer;