import React from "react";
import { useSelector } from "react-redux";
import { selectAllMovies } from "../../redux/selectors";
import { InputContainer, InputWrapper } from "./Search.styled";
import { Container } from "../Layout/Layout.styled";

const Search = ({ filteredMovies }) => {
  const allMovies = useSelector(selectAllMovies);

  const filterByTitle = (e) => {
    console.log(allMovies);
    const filtered = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    filteredMovies(filtered);
  };

  return (
    <InputContainer>
      <InputWrapper>
        <label id="movieTitle">You can search movies by title</label>
        <input
          type="text"
          aria-labelledby="movieTitle"
          onChange={filterByTitle}
          placeholder="Enter the title"
        />
      </InputWrapper>
    </InputContainer>
  );
};

export default Search;
