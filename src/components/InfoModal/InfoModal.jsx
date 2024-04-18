import { getFormattedDate } from "../../helpers/getFormattedDate";
import {
  BtnWrapper,
  InfoModalWrapper,
  InfoWrapper,
  StyledNavLink,
} from "./InfoModal.styled";

import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/thunk";
import { toast } from "react-toastify";
import { useState } from "react";
import Edit from "../Edit/Edit";

export const InfoModal = ({ movie }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const {
    _id,
    image,
    title,
    rating,
    release_date,
    description,
    actors,
    director,
    genre,
  } = movie;

  const dispatch = useDispatch();

  const formattedDate = getFormattedDate(release_date);

  const handleImageError = (event) => {
    event.target.onError = null;
    event.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
  };

  const onDelete = (id) => {
    dispatch(deleteMovie({ id }))
      .unwrap()
      .then(() => {
        toast.success("Deleted successfully");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <>
      <InfoModalWrapper>
        <img src={image} onError={handleImageError} alt="" />
        <InfoWrapper>
          <h2>{title}</h2>
          <p>{description}</p>
          <span>Genre:</span>
          <ul>
            {genre.map((gen) => (
              <li key={genre.indexOf(gen)}> {gen}</li>
            ))}
          </ul>
          <span>Actors:</span>
          <ul>
            {actors.map((act) => (
              <li key={actors.indexOf(act)}> {act}</li>
            ))}
          </ul>
          <p>
            <span>Director: </span>
            {director}
          </p>
          <p>
            <span>Rating:</span> {rating}
          </p>
          <p>
            <span>Release date:</span> {formattedDate}
          </p>
          <BtnWrapper>
            <StyledNavLink onClick={() => setIsEditOpen(!isEditOpen)}>
              Edit
            </StyledNavLink>
            <button onClick={() => onDelete(_id)}>Delete</button>
          </BtnWrapper>
        </InfoWrapper>
      </InfoModalWrapper>
      {isEditOpen && <Edit movie={movie} close={() => setIsEditOpen(false)} />}
    </>
  );
};
