import "./App.css";

import { Albums, Comments, Photos, Posts, Todos, User } from "./component/screen/Resources"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Books from "./component/screen/Books";
import Header from "./component/layout/header"
import Home from "./component/screen/Home";
import Movies from "./component/screen/Movies";
import Tech from "./component/screen/Tech";
import Webseries from "./component/screen/Webseries";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tech" element={<Tech />} />
        <Route path="webseries" element={<Webseries />} />
        <Route path="movies" element={<Movies />} />
        <Route path="book" element={<Books />} />
        <Route path="comments" element={<Comments />} />
        <Route path="albums" element={<Albums />} />
        <Route path="photos" element={<Photos />} />
        <Route path="todos" element={<Todos />} />
        <Route path="users" element={<User />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
