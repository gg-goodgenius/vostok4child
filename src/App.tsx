import { Routes, Route } from "react-router-dom";
import pages from "./Pages";
import { Page404 } from './Pages/Page404';

function App() {
  return (
    <Routes>
      {Object.values(pages).map((page, index) => <Route path={page.path} element={page.element} key={index} />)}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
