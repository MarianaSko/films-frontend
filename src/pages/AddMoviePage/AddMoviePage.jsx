import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/thunk";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddMovieWrapper, StyledBtn } from "./AddMoviepage.styled";
import { useNavigate } from "react-router-dom/dist";

const AddMoviePage = () => {
  const dispatch = useDispatch();
  const [releaseDate, setReleaseDate] = useState(new Date());
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const submit = (e) => {
    const newMovie = {
      title: e.title,
      rating: e.rating || 0,
      description: e.description || "No description",
      release_date: releaseDate || Date.now(),
      director: e.director || "Director is not specified",
    };
    dispatch(addMovie(newMovie))
      .unwrap()
      .then(() => {
        toast.success("Movie was added successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <AddMovieWrapper>
      <h3>Add new movie</h3>
      <form action="" onSubmit={handleSubmit(submit)}>
        <TextField
          label="Title"
          {...register("title")}
          id="outlined-start-adornment"
          required
          sx={{
            m: 1,
            "& input": {
              width: "240px",
            },
          }}
        />
        <TextField
          id="outlined-number"
          {...register("rating")}
          label="Rating"
          type="number"
          inputProps={{
            min: 0,
            max: 10,
            step: 0.1,
          }}
          sx={{
            m: 1,
            "& input": {
              width: "240px",
            },
          }}
        />
        <TextField
          label="Description"
          {...register("description")}
          id="outlined-start-adornment"
          sx={{
            m: 1,
            "& input": {
              width: "240px",
            },
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...register("date")}
            label="Release Date"
            onChange={(date) => setReleaseDate(date)}
            sx={{
              m: 1,
              "& input": {
                width: "204px",
              },
            }}
          />
        </LocalizationProvider>
        <TextField
          label="Director"
          {...register("director")}
          id="outlined-start-adornment"
          sx={{
            m: 1,
            "& input": {
              width: "240px",
            },
          }}
        />

        <StyledBtn type="submit">Add</StyledBtn>
      </form>
    </AddMovieWrapper>
  );
};

export default AddMoviePage;
