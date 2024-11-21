import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./layout";
import { Test } from "./pages/Test";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<h1>Error 404!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
