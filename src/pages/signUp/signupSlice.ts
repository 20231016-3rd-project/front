// signupSlice.ts 파일
import { createAsyncThunk } from '@reduxjs/toolkit';
import { signup, checkEmailDuplication, SignupRequest } from '../../services/AuthService';

// 회원가입을 위한 비동기 액션
export const submitSignup = createAsyncThunk(
  'signup/submitSignup',
  async (userData: SignupRequest, { rejectWithValue }) => {
    try {
      // 먼저 이메일 중복 확인을 수행
      const isEmailDuplicate = await checkEmailDuplication(userData.email);
      if (isEmailDuplicate) {
        // 이메일 중복이 있을 경우
        return rejectWithValue('이메일이 중복됩니다.');
      }

      // 회원가입 요청
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
