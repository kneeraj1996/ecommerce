import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({

    name: 'config',
    initialState: {
        visibleProfile: false

    },
    reducers: {
       toggleVisibleProfile: (state, action) => {
        state.visibleProfile = !state.visibleProfile;
       }
    }
})

export const { toggleVisibleProfile } = configSlice.actions;
export default configSlice.reducer;
