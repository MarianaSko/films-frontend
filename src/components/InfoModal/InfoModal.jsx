import { getFormattedDate } from "../../helpers/getFormattedDate";
import { useEffect, useState } from "react";
import { InfoModalWrapper, InfoWrapper } from "./InfoModal.styled";
import { Btn } from "../Movie/Movie.styled";
import ModalWindow from "../ModalPortal/ModalPortal";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/thunk";
import { toast } from "react-toastify";
import { MaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom/dist";
import { StyledNavLink } from "../Layout/Layout.styled";

export const InfoModal = ({ movie }) => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const formattedDate = getFormattedDate(release_date);

  const handleImageError = (event) => {
    event.target.onError = null; // Remove the event listener to prevent an infinite loop
    event.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"; // Set the default image URL
  };

  const onDelete = (id) => {
    dispatch(deleteMovie({ id }))
      .unwrap()
      .then(() => {
        toast.success("Deleted successfully");
      })
      .catch((err) => toast.error(err));
  };
  useEffect(() => {
    console.log("Component re-rendered");
  }, [isModalOpen]);

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
          <NavLink to="/edit">Edit</NavLink>
          <button onClick={() => onDelete(_id)}>Delete</button>
        </InfoWrapper>
        {/* <MaterialReactTable /> */}
      </InfoModalWrapper>
      {/* {isModalOpen && (
        <ModalWindow onClose={() => setIsModalOpen(false)}></ModalWindow> */}
      )}
    </>
  );
};
