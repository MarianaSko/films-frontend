import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../redux/thunk";
import { toast } from "react-toastify";
import { selectAllMovies } from "../../redux/selectors";
import Movie from "../../components/Movie/Movie";
import { StyledList, StyledMessage } from "./HomePage.styled";
import Search from "../../components/Search/Search";

const HomePage = () => {
  const allMovies = useSelector(selectAllMovies);
  const dispatch = useDispatch();
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    dispatch(getAllMovies())
      .unwrap()
      .catch((err) => toast.error(err));
  }, [dispatch]);

  useEffect(() => {
    setFilteredMovies(allMovies);
  }, [allMovies]);

  return (
    <div>
      <Search filteredMovies={setFilteredMovies} />
      {filteredMovies?.length === 0 ? (
        <StyledMessage>
          We do not have any movies matching your
          <span> search query</span>!
        </StyledMessage>
      ) : (
        <StyledList>
          {Array.isArray(filteredMovies) &&
            filteredMovies.map((movie) => (
              <Movie movie={movie} key={movie._id} />
            ))}
        </StyledList>
      )}
    </div>
  );
};

export default HomePage;
