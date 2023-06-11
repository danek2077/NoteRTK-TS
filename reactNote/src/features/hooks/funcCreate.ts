import { AddPostRtk } from "../../store/slices/PostSlice";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
type TypecreatePostDpn = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  navigate: NavigateFunction,
  num: number,
  inputTitle: string,
  selected: string[],
  areaBody: string,
  dispatch: Dispatch<any>,
) => void;
export const createPostDpn: TypecreatePostDpn = (
  event,
  navigate,
  num,
  inputTitle,
  selected,
  areaBody,
  dispatch
) => {
  const numberAdd = num ? num : 1;
  event.preventDefault();
  dispatch(
    AddPostRtk({
      id: numberAdd,
      title: inputTitle,
      tag: selected,
      body: areaBody,
    })
  );
  navigate("/");
};
