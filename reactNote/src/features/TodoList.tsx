import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
type ObjectProp = {
  body: string;
  title: string;
  tag: string[];
  id: number;
};
type TodoTypeProp = {
  posts: ObjectProp[];
};
const TodoList = ({ posts }: TodoTypeProp) => {
  return (
    <div>
      {posts.length !== 0 ? (
        posts.map((val) => {
          const uniqueKey = uuidv4();
          return <TodoItem key={uniqueKey} {...val} />;
        })
      ) : (
        <strong className="mt-9 text-xl">Пустенько</strong>
      )}
    </div>
  );
};

export default TodoList;
