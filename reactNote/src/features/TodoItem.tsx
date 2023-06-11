import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const TodoItem = ({
  tag,
  title,
  id,
}: {
  title: string;
  tag: string[];
  id: number;
}) => {
  return (
    <div className="flex space-between mt-10">
      <div>
        <div>title: {title}</div>
        <div className="flex items-center">
          {tag.length === 0 ? (
            <h1>Нема тегов</h1>
          ) : (
            tag.map((val) => {
              const uniqueKey = uuidv4();
              return (
                <div
                  key={uniqueKey}
                  className="w-19 h-19 text-white bg-green-500 rounded mt-2 flex items-center justify-center mr-2"
                >
                  <span>{val}</span>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Link
        to={`/viewUser/${id}`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 ml-10"
      >
        Edit
      </Link>
    </div>
  );
};

export default TodoItem;
