import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import "../features/TagsStyles.css";
import { EditPostRtk } from "../store/slices/PostSlice";
import { RootState } from "../store/store";

const EditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const one = useSelector((state: RootState) => state.PostSlice.users);
  const [inputTitle, setInputTitle] = React.useState("");
  const [areaBody, setAreaBody] = React.useState("");
  const [selected, setSelected] = React.useState<string[]>([]);
  React.useEffect(() => {
    if (id) {
      const forEz = one[Number(id) - 1];
      setInputTitle(forEz.title);
      setAreaBody(forEz.body);
      setSelected(forEz.tag);
    }
  }, [id]);
  const editUser = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(
      EditPostRtk({
        id: Number(id),
        title: inputTitle,
        tag: selected,
        body: areaBody,
      })
    );
    navigator("/");
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
            onClick={editUser}
          >
            enterEdit
          </Link>
        ) : (
          <button
            disabled
            className="bg-blue-300 text-white font-bold py-2 px-4 rounded mr-5"
          >
            enterEdit
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

export default EditPage;
