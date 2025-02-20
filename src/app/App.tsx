// Routing
import { Route, Routes } from "react-router";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
