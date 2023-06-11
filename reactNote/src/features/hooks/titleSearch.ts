import React from "react";
import { RootState } from "../../store/store";
import { UserType } from "../../store/slices/PostSlice";
import { useSelector } from "react-redux";

const getUsersHook = (state: RootState) => state.PostSlice.users;
export const useReadyFilterHook = () => {
  const [inputSearch, setInputSearch] = React.useState<string>("");
  const [inputTagSearch, setInputTagSearch] = React.useState<string[]>([]);
  const getUsers = useSelector(getUsersHook);
  let rezSearch: UserType[] = getUsers;
  if (inputSearch.length !== 0) {
    rezSearch = rezSearch.filter((val) =>
      val.title.toLowerCase().includes(inputSearch.toLowerCase())
    );
  } 
  if (inputTagSearch.length !== 0) {
    rezSearch = rezSearch.filter((user) =>
      inputTagSearch.some((inputTag) => user.tag.includes(inputTag))
    );
  }
  return {
    inputTagSearch,
    setInputTagSearch,
    inputSearch,
    setInputSearch,
    rezSearch,
  };
};
