import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function SideNav() {
  return (
    <>
      <Link to="/my1">my3333</Link>
    </>
  );
}
function My1() {
  return <div> My1111</div>;
}
function App() {
  return (
    <BrowserRouter>
      <div>Home Page</div>
      <Routes>
        <Route path="/my1" element={<My1></My1>}></Route>
      </Routes>
      <SideNav></SideNav>
    </BrowserRouter>
  );
}

export default App;
