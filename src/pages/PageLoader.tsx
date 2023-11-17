import { Navigate, Route, Routes } from "react-router-dom";

const PageLoader = () => {
  return (
    <Routes>
      <Route path="/" element={<p>This is the root</p>}></Route>
      <Route path="money" element={<p>this is the money page</p>}></Route>
      <Route path="candy" element={<p>this is the candy page</p>}></Route>
    </Routes>
  );
};

export default PageLoader;
