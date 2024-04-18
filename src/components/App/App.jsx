import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { LoaderContainer } from "./App.styled";
import { ColorRing } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/selectors";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);
const AddMoviePage = lazy(() =>
  import("../../pages/AddMoviePage/AddMoviePage")
);
const EditPage = lazy(() => import("../../pages/EditPage/EditPage"));

const App = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading && (
        <LoaderContainer>
          <ColorRing
            height="150"
            width="150"
            colors={["#3763c1", "#6577df", "#3411d1", "#e9ff87", "#d0de52"]}
          />
        </LoaderContainer>
      )}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="favourites" element={<FavoritesPage />} />
          <Route path="add" element={<AddMoviePage />} />
          <Route path="edit" element={<EditPage />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
