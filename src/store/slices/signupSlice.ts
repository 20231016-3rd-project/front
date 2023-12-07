import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signup, checkEmailDuplication, checkNicknameDuplication, SignupRequest } from '../../apis/userApi/userApi';

interface SignupState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  userData: SignupRequest | null; // 회원가입 성공 시 사용자 데이터 저장
  signupSuccess: boolean;
}

const initialState: SignupState = {
  status: 'idle',
  error: null,
  userData: null,
  signupSuccess: false,
};

export const submitSignup = createAsyncThunk(
  'signup/submitSignup',
  async (userData: SignupRequest, { rejectWithValue }) => {
    try {
      console.log("Checking email duplication for:", userData.email); 
      const isEmailDuplicate = await checkEmailDuplication(userData.email);
      console.log("Email duplication check result:", isEmailDuplicate); 

      if (isEmailDuplicate) {
        return rejectWithValue('이메일이 중복됩니다.');
      }

      // 닉네임 중복 확인 
      const isNicknameDuplicate = await checkNicknameDuplication(userData.nickname);
      if (isNicknameDuplicate) {
        return rejectWithValue('닉네임이 중복됩니다.');
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
    resetSignupState: (state) => {
      state.signupSuccess = false;
      state.status = 'idle';
      state.error = null;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitSignup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitSignup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userData = action.payload;
        state.signupSuccess = true; 
      })
      .addCase(submitSignup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
        state.signupSuccess = false; 
      });
  },
});

export const { resetSignupState } = signupSlice.actions;
export default signupSlice.reducer;