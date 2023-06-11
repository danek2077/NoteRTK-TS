import { createSelector, OutputParametricSelector } from "@reduxjs/toolkit";
import { UserType } from "../../store/slices/PostSlice";
import { RootState } from "../../store/store";

type TypeUserFilter = OutputParametricSelector<
  RootState,
  void,
  string[],
  (res: UserType[]) => string[]
>;

const getUsers = (state: RootState): UserType[] => state.PostSlice.users;

export const userFiltredSelector: TypeUserFilter = createSelector(
  getUsers,
  (users) => {
    let allTags: string[] = users.flatMap((user) => user.tag);
    const uniqueTags: string[] = [...new Set(allTags)];
    return uniqueTags;
  }
);
