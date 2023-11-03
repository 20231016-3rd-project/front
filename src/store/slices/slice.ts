import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    city: '서울',
    district: '전체',
    dong: '전체',
}

export const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        
    }
})