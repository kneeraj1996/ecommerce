import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({

    name: 'config',
    initialState: {
        visibleProfile: false,
        user: {}

    },
    reducers: {
       toggleVisibleProfile: (state, action) => {
        state.visibleProfile = !state.visibleProfile;
       },
       addUser: (state, action) => {
        state.user = action.payload;
       },
       removeUser: (state, action) => {
        state.user = {};
       }
    }
})

export const { toggleVisibleProfile, addUser, removeUser } = configSlice.actions;
export default configSlice.reducer;
