import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'user',
  initialState: {
    search: null,
    contacts: [],
  },
  reducers: {
    initContact(state, action) {
      state.contacts = action.payload.map((user) => {
        return {
          id: user.login.uuid,
          name: user.name.first + ' ' + user.name.last,
          picture: user.picture.large,
          contact: user.phone,
          chats: [],
        };
      });

      return state;
    },
    updateContact(state, action) {
      state.contacts = state.contacts.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    searchContact(state, action) {
      state.search = action.payload;
    },
  },
});

export default contactSlice.reducer;
export const { initContact, searchContact, updateContact } =
  contactSlice.actions;
