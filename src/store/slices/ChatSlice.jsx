import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {},
  reducers: {
    updateChat(state, action) {
      if (state.id !== action.payload.id) return (state = action.payload);
      return state;
    },
    initChat(state, action) {
      const user = action.payload;
      return {
        id: user.login.uuid,
        name: user.name.first + ' ' + user.name.last,
        picture: user.picture.large,
        contact: user.contact,
        chats: [],
      };
    },
    addChat(state, action) {
      action.payload.time = new Date(Date.now()).toISOString();
      // console.log(action.payload.time);
      state.chats.push(action.payload);
      return state;
    },
  },
});

export default chatSlice.reducer;
export const { updateChat, addChat, initChat } = chatSlice.actions;
