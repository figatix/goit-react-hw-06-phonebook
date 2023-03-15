import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact(state, action) {
      const name = action.payload.name;
      const isExist = state.contacts.find(
        person => person.name === name.trim()
      );

      if (isExist) {
        alert(`${name} is already in contacts.`);
        return state;
      }

      const finallyNewContact = {
        id: nanoid(),
        ...action.payload,
      };

      state.contacts = [finallyNewContact, ...state.contacts];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        person => person.id !== action.payload
      );
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getContactsState = state => state.contacts.contacts;
// ***
