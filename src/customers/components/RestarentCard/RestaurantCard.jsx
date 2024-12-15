import React from "react";
import "./Restaurant.css";
import { useNavigate } from "react-router-dom";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../../State/Authentication/Action";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { isPresentInFavorites } from "../../../config/logic";

const RestaurantCard = ({ data, index }) => {
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const jwt=localStorage.getItem("jwt");

  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites({restaurantId:data.id,jwt:auth.jwt||jwt}));
  };

  const navigateToRestaurant = () => {
    if(data.open)
    navigate(`/restaurant/${data.address.city}/${data.name}/${data.id}`);
  };

  return (
    <Card className="  m-8 w-[24rem] productCard  ">
      <div onClick={navigateToRestaurant} className={`${data.open?"cursor-pointer":"cursor-not-allowed"}  bg-black relative`}>
        <img
          className="imagePart w-full h-[13rem] rounded-t-md object-cover "
          src={data.images[0]}
          alt=""
        />
        <Chip
          size="small"
          // variant="outlined"
          className="absolute top-2 left-2"
          color={data.open?"success":"error"}
          label={data.open ? "Open" : "Closed"}
        />
      </div>
      <div className="p-6 textPart h-[10rem]  lg:flex w-full justify-between bg-[#00000017]">
        <div className="space-y-1 ">
          <p className="font-semibold text-3xl text-yellow-400">{data.name}</p>
          {/* <div>
          <span>{data.rating}</span>
        </div> */}
          <p className="text-gray-200 text-sm">
            {data.description.length > 150
              ? data.description.substring(0, 150) + "..."
              : data.description}
          </p>
        </div>

        <div>
          <IconButton onClick={handleAddToFavorites}>
            {isPresentInFavorites(auth.favorites, data) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
