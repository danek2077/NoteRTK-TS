import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import TagJsx from "../features/TagJsx";
import { userFiltredSelector } from "../features/hooks/TagSelector";
import { DeleteTagRtk } from "../store/slices/PostSlice";
import { Link } from "react-router-dom";
const TagEdit = () => {
  const filtredUsers = useSelector(userFiltredSelector);
  const dispatch = useDispatch();
  const deleteTag = (text: string) => {
    dispatch(DeleteTagRtk(text));
  };
  return (
    <div>
      <div className="mb-10">
        {filtredUsers.length !== 0 ? (
          filtredUsers.map((val) => {
            const uniqKey = uuidv4();
            return <TagJsx key={uniqKey} deleteTag={deleteTag} inner={val} />;
          })
        ) : (
          <h1 className="text-4xl">Пустенько</h1>
        )}
      </div>

      <Link
        to={"/"}
        className="mt-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        getBack
      </Link>
    </div>
  );
};

export default TagEdit;
