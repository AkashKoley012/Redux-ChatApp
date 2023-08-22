import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    search: null,
    users: [],
  },
  reducers: {
    addUser(state, action) {
      const users = state.users.filter((user) => user.id === action.payload.id);
      // console.log(users);
      if (users.length === 0) state.users.push(action.payload);
    },
    updateUser(state, action) {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    searchUser(state, action) {
      state.search = action.payload;
    },
    initUser(state, action) {
      state.users = action.payload.map((user) => {
        return {
          id: user.login.uuid,
          name: user.name.first + ' ' + user.name.last,
          picture: user.picture.large,
          contact: user.phone,
          chats: [],
        };
      });
    },
  },
});

export default userSlice.reducer;
export const { addUser, initUser, updateUser, searchUser } = userSlice.actions;
