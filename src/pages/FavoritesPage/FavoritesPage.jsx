import React from "react";
import { StyledList, StyledMessage } from "../HomePage/HomePage.styled";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import Movie from "../../components/Movie/Movie";
import { FavWrapper } from "./FavoritesPage.styled";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <FavWrapper>
      <h3>Your favourite movies</h3>
      {favorites?.length === 0 ? (
        <StyledMessage>
          You do not have any advertisments in your <span>favorites list</span>!
        </StyledMessage>
      ) : (
        <StyledList>
          {favorites?.map((movie) => (
            <Movie movie={movie} key={movie._id} />
          ))}
        </StyledList>
      )}
    </FavWrapper>
  );
};

export default FavoritesPage;
