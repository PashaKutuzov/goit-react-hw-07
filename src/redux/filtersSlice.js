import {createSlice } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filters.name

const slice = createSlice({
    name: 'filters',
    initialState: {
        name: ""
    },
    reducers: {
        setFilter: (state, action) => {
            return {
                ...state,
                name: action.payload,
            }
        },
        
    }
});

export default slice.reducer;

export const {setFilter} = slice.actions



