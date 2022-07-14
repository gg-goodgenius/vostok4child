import { Routes, Route } from "react-router-dom";
import pages from "./Pages";
import { Page404 } from './Pages/Page404';

function App() {
  return (
    <Routes>
      {Object.values(pages).map((page, index) => {
        let _route:React.ReactNode
        // if (page.detail) {
        //   _route = (<Route path={page.path} element={page.element} key={index}>
        //       <Route path={page.path + "/:id"} element={page.subElement} />
        //     </Route>)
        //     console.log(page.subElement);
        // } else {
          _route = <Route path={page.path} element={page.element} key={index} />
        // }
        
        
        return _route
        })}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
