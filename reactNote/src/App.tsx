import { Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddPost from "./pages/AddPost";
import DetailPost from "./pages/DetailPost";
import EditPage from "./pages/EditPage";
import TagEdit from "./pages/TagEdit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/TagEdit" element={<TagEdit />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/editUser/:id" element={<EditPage />} />
        <Route path="/viewUser/:id" element={<DetailPost />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
