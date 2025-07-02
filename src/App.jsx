import { Routes, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Project from './view/Project'

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Project' element={<Project /> }></Route>
      </Routes>

    </div>
  );
}
