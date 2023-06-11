import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import "../features/TagsStyles.css";
import { createPostDpn } from "../features/hooks/funcCreate";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
const AddPost = () => {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = React.useState("");
  const [areaBody, setAreaBody] = React.useState("");
  const [selected, setSelected] = React.useState<string[]>([]);
  const dispatch = useDispatch();
  const num = useSelector((state: RootState) =>state.PostSlice.users[state.PostSlice.users.length - 1]?.id + 1);
  const createPost = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    createPostDpn(event,navigate,num,inputTitle,selected,areaBody,dispatch);
  };
  return (
    <div className="mt-10 ml-10">
      <div>
        <input
          value={inputTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputTitle(e.target.value)
          }
          type="text"
          className="border border-gray-300 rounded py-2 px-4"
          placeholder="Title"
        />
        <div className="inline-block ml-5">
          <em>press enter or comma to add new tag</em>
          <TagsInput
            classNames={{ tag: "tagInput", input: "inputField" }}
            value={selected}
            onChange={setSelected}
            placeHolder="Tags"
          />
        </div>
        <div>
          <textarea
            value={areaBody}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setAreaBody(e.target.value)
            }
            placeholder="body"
            className="border border-gray-300 rounded py-2 px-4 mt-10"
            rows={4}
          ></textarea>
        </div>
      </div>
      <div className="mt-7">
        {inputTitle.length > 0 && areaBody.length > 0 ? (
          <Link
            to={"/"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
            onClick={createPost}
          >
            Create
          </Link>
        ) : (
          <button
            disabled
            className="bg-blue-300 text-white font-bold py-2 px-4 rounded mr-5"
          >
            Create
          </button>
        )}

        <Link
          to={"/"}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </Link>
        {(inputTitle.length === 0 || areaBody.length === 0) && (
          <strong className="block mt-3">Заполните title и body</strong>
        )}
      </div>
    </div>
  );
};

export default AddPost;
