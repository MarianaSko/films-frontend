import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import AddMoviePage from "../../pages/AddMoviePage/AddMoviePage";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import EditPage from "../../pages/EditPage/EditPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favourites" element={<FavoritesPage />} />
        <Route path="add" element={<AddMoviePage />} />
        <Route path="edit" element={<EditPage />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
