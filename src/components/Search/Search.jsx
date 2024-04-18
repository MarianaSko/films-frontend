import { useSelector } from "react-redux";
import { selectAllMovies } from "../../redux/selectors";
import { InputWrapper } from "./Search.styled";
import { TextField } from "@mui/material";

const Search = ({ filteredMovies }) => {
  const allMovies = useSelector(selectAllMovies);

  const filterByTitle = (e) => {
    const filtered = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    filteredMovies(filtered);
  };

  return (
    <InputWrapper>
      <TextField
        label="Search movie by title"
        onChange={filterByTitle}
        id="outlined-start-adornment"
        sx={{
          "& input": {
            width: "240px",
          },
        }}
      />
    </InputWrapper>
  );
};

export default Search;
