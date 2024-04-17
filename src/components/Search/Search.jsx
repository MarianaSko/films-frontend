import { useSelector } from "react-redux";
import { selectAllMovies } from "../../redux/selectors";
import { InputContainer, InputWrapper } from "./Search.styled";
import { TextField } from "@mui/material";

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
        <TextField
          label="Search movie by title"
          onChange={filterByTitle}
          id="outlined-start-adornment"
          sx={{
            m: 1,

            "& input": {
              width: "240px",
            },
          }}
        />
      </InputWrapper>
    </InputContainer>
  );
};

export default Search;
