import {createSlice,createSelector } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./tasksOps";
import { selectFilter } from "./filtersSlice"
    
export const selectContacts = (state) => state.contacts.items
export const selectIsLoading = (state) => state.contacts.loading
export const selectIsError = (state) => state.contacts.error


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [], 
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state) => {
  state.loading = false;
  state.error = true; 
        })
            .addCase(addContact.pending, (state) => {
            state.loading = true;
        })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false
                state.items.push(action.payload)
            })
            .addCase(addContact.rejected, (state) => {
                state.loading = false 
                state.error = true
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false
                state.items = state.items.filter(
                    contact => contact.id !== action.payload.id)
                    
            }
            
        )
},
    
    
})



export default slice.reducer;




// export const selectContacts = state => state.contacts.items;





