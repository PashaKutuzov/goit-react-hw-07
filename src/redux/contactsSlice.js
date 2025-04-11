import {createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";


const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: initialContacts
    },
    reducers: {
        deleteContact: (state, action) => {
            return {
                ...state,
     items: state.items.filter(contact => contact.id !== action.payload)
            }
        },
        addContact: (state, action) => {
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        }
    }
});
export const selectContacts = state => state.contacts.items;


export default slice.reducer;
export const { deleteContact, addContact } = slice.actions;

