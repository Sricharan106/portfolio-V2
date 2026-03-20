import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages";
import ProjectsRoute from "./pages/projects";
import BlogsRoute from "./pages/blog";
import CursorManager from "./components/ui/customCursor";

function App() {
  return (
    <Router>
      <CursorManager />
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/projects" element={<ProjectsRoute />}></Route>
        <Route path="/blogs" element={<BlogsRoute />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
