import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/thunk";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";

const AddMoviePage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const submit = (e) => {
    const newMovie = {
      title: e.title,
      rating: e.rating || 0,
      description: e.description || "No description",
      release_date: e.releaseDate || Date.now(),
      director: e.director || "Director is not specified",
    };
    dispatch(addMovie(newMovie))
      .unwrap()
      .then(() => {
        toast.success("Movie was added successfully");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div>
      AddMoviePage
      <form action="" onSubmit={handleSubmit(submit)}>
        {/* <label htmlFor="title">Title</label>
        <input type="text" {...register("title")} id="title" /> */}
        <TextField
          label="Title"
          {...register("title")}
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
        />
        <label htmlFor="rating">Rating</label>
        <input type="text" {...register("rating")} id="rating" />
        {/* <label htmlFor="description">Description</label>
        <input type="text" {...register("description")} id="description" /> */}
        <TextField
          label="Description"
          {...register("description")}
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
        />
        <label htmlFor="releaseDate">Release date</label>
        <input type="text" {...register("releaseDate")} id="releaseDate" />
        {/* <label htmlFor="director">Director</label>
        <input type="text" {...register("director")} id="director" /> */}
        <TextField
          label="Director"
          {...register("director")}
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMoviePage;
