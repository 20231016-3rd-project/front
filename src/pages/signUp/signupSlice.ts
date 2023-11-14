import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signup, checkEmailDuplication, checkNicknameDuplication, SignupRequest } from '../../apis/authApi/authApi';

interface SignupState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  userData: SignupRequest | null; // 회원가입 성공 시 사용자 데이터 저장
}

const initialState: SignupState = {
  status: 'idle',
  error: null,
  userData: null,
};

export const submitSignup = createAsyncThunk(
  'signup/submitSignup',
  async (userData: SignupRequest, { rejectWithValue }) => {
    try {
      console.log("Checking email duplication for:", userData.email); // 함수 호출 전 로그 추가
      const isEmailDuplicate = await checkEmailDuplication(userData.email);
      console.log("Email duplication check result:", isEmailDuplicate); // 함수 호출 후 로그 추가

      if (isEmailDuplicate) {
        return rejectWithValue('이메일이 중복됩니다.');
      }

      // 닉네임 중복 확인 추가
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
    // 여기에 필요한 다른 리듀서들을 추가할 수 있습니다.
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitSignup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitSignup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userData = action.payload; // 성공 데이터를 상태에 저장
      })
      .addCase(submitSignup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default signupSlice.reducer;