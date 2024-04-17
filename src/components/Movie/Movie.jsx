import { useEffect, useState } from "react";
import { getFormattedDate } from "../../helpers/getFormattedDate";
import { DescWrapper, Btn, FavoriteBtn, ImgWrapper } from "./Movie.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import { removeFavorites, setFavorites } from "../../redux/slice";
import favoriteBtn from "../../assets/favorite.svg";
import favoriteChecked from "../../assets/favoriteChecked.svg";
import { useLocation } from "react-router-dom";
import ModalWindow from "../ModalPortal/ModalPortal";
import { InfoModal } from "../InfoModal/InfoModal";

const Movie = ({ movie }) => {
  const { _id, image, title, rating, release_date } = movie;

  const location = useLocation();
  const favorites = useSelector(selectFavorites);
  const [isChecked, setIsChecked] = useState(favorites.includes(_id));
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsChecked(favorites.some((favorite) => favorite._id === _id));
  }, [_id, favorites]);

  function onFavoriteBtnClick() {
    if (isChecked) {
      dispatch(removeFavorites(_id));
    } else {
      dispatch(setFavorites(movie));
    }
  }

  const formattedDate = getFormattedDate(release_date);

  const handleImageError = (event) => {
    event.target.onError = null; // Remove the event listener to prevent an infinite loop
    event.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"; // Set the default image URL
  };
  return (
    <li>
      <ImgWrapper>
        <img src={image} onError={handleImageError} alt="" />
        <h2>{title}</h2>
      </ImgWrapper>
      <DescWrapper>
        <p>
          <span>Rating:</span> {rating}
        </p>
        <p>
          <span>Release date:</span> {formattedDate}
        </p>
        <Btn onClick={() => setIsModalOpen(true)}>Details</Btn>
      </DescWrapper>
      <FavoriteBtn onClick={onFavoriteBtnClick}>
        {isChecked ? (
          <img src={favoriteChecked} alt="" />
        ) : (
          <img src={favoriteBtn} alt="" />
        )}
      </FavoriteBtn>
      {isModalOpen && (
        <ModalWindow onClose={() => setIsModalOpen(false)}>
          <InfoModal movie={movie}></InfoModal>
        </ModalWindow>
      )}
    </li>
  );
};

export default Movie;
