import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import TodoList from "../features/TodoList";
import { useReadyFilterHook } from "../features/hooks/titleSearch";

const MainPage = () => {
  
  const {
    inputTagSearch,
    setInputTagSearch,
    inputSearch,
    setInputSearch,
    rezSearch,
  } = useReadyFilterHook();
  // React.useEffect(() => {
  //   let rez: string | null = localStorage.getItem("usersStore");
  //   if (rez !== null) {
  //     dispatch(UsersLocalRtk(JSON.parse(rez)));
  //   }
  // }, []);

  return (
    <div className="mt-10 ml-40">
      <div className="flex">
        <Link
          to={"/addPost"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
        >
          addPost
        </Link>
        <Link
          to={"/tagEdit"}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          TagDelete
        </Link>
      </div>

      <div className="flex mt-4">
        <input
          value={inputSearch}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputSearch(e.target.value)
          }
          type="text"
          className="border border-gray-300 rounded py-2 px-4"
          placeholder="Title search"
        />
        <div className="inline-block ml-5">
          <em>press enter or comma to add new tag</em>
          <TagsInput
            classNames={{ tag: "tagInput", input: "inputField" }}
            value={inputTagSearch}
            onChange={setInputTagSearch}
            placeHolder="TagsSearch"
          />
        </div>
      </div>
      <TodoList posts={rezSearch} />
    </div>
  );
};

export default MainPage;
