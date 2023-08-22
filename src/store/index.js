import { configureStore } from '@reduxjs/toolkit';
import ContatSlice from './slices/ContatSlice';
import userSlice from './slices/UserSlice';
import chatSlice from './slices/ChatSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    chats: chatSlice,
    contacts: ContatSlice,
  },
});

export default store;
