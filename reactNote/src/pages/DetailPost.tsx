import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { DeleteUserRtk } from "../store/slices/PostSlice";
const DetailPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detInfo = useSelector(
    (state: RootState) => state.PostSlice.users[Number(id) - 1]
  );
  const deleteUser = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (id) {
      dispatch(DeleteUserRtk(Number(id)));
    }

    navigate("/");
  };
  return (
    <div>
      {id && (
        <div>
          <div>title: {detInfo.title}</div>
          <div>body: {detInfo.body}</div>
          <div>tags:</div>
          {detInfo.tag.length === 0 ? (
            <h1>Нема тегов</h1>
          ) : (
            detInfo.tag.map((val, key) => (
              <div
                key={key}
                className="w-19 h-19 text-white bg-green-500 rounded mt-2 flex items-center justify-center mr-2"
              >
                <span>{val}</span>
              </div>
            ))
          )}
        </div>
      )}
      <div className="mt-10">
        <Link
          to={`/editUser/${id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5 "
        >
          Edit
        </Link>
        <Link
          to={"/"}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </Link>
        <Link
          onClick={deleteUser}
          to={"/"}
          className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded ml-5"
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default DetailPost;
