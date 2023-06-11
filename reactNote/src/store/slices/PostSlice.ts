import { Middleware, PayloadAction, createSlice } from "@reduxjs/toolkit";
export type UserType = {
  id: number;
  title: string;
  tag: string[];
  body: string;
};
type initialUsersType = {
  users: UserType[];
};
const initialState: initialUsersType = {
  users: [],
};
export const everyReducerMiddleWare: Middleware =
  (storeAPI) => (next) => (action) => {
    let forReturn = next(action);
    const rez = storeAPI.getState().PostSlice.users;
    localStorage.clear();
    localStorage.setItem("usersStore", JSON.stringify(rez));
    return forReturn;
  };

export const PostSlice = createSlice({
  name: "PostSlice",
  initialState,
  reducers: {
    AddPostRtk: (state, action: PayloadAction<UserType>) => {
      return {
        users: [...state.users, action.payload],
      };
    },
    EditPostRtk: (state, action: PayloadAction<UserType>) => {
      let rez = state.users.map(function (value) {
        if (value.id === action.payload.id) {
          return action.payload;
        }
        return value;
      });
      return {
        users: rez,
      };
    },
    DeleteUserRtk: (state, action: PayloadAction<number>) => {
      let rez = state.users.filter((val) => val.id !== action.payload);
      return {
        users: rez,
      };
    },
    DeleteTagRtk: (state, action: PayloadAction<string>) => {
      let rez = state.users.map(function (val) {
        let rez2 = val.tag.filter((valtag) => valtag !== action.payload);
        return { ...val, tag: rez2 };
      });
      return { users: rez };
    },
  },
});

export const { AddPostRtk, EditPostRtk, DeleteUserRtk, DeleteTagRtk } =
  PostSlice.actions;

export default PostSlice.reducer;
