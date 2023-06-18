import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    add(state, action) {
      return { ...state, items: state.items.concat(action.payload) };
    },
    remove(state, action) {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
  },
});

export const { add, remove } = contactsSlice.actions;

// Selectors

export const getContacts = state => state.contacts.items;
