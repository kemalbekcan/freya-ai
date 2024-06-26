"use client";

import Image from "next/image";
import { BasicButton } from "@/components";
import heartIcon from "@/assets/images/heart.png";
import solidHeartIcon from "@/assets/images/solid-heart.png";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { deleteProduct, addProduct } from "@/lib/features/product/productSlice";
import {
  updateFavourite,
  deleteFavourite,
} from "@/lib/features/favourite/favouriteSlice";

const FavouriteActions = (props: any) => {
  const dispatch = useAppDispatch();

  const addFavourite = (item: any) => {
    dispatch(updateFavourite(item));
    dispatch(deleteProduct(item));
  };

  const handleDelete = (item: any) => {
    if (item) {
      dispatch(deleteFavourite(item.id));
      dispatch(addProduct(item));
    }
  };

  const { id } = props;

  const favourites = useAppSelector((item) => item.favourite.favourites);

  let isFavourite = false;

  if (favourites !== null) {
    isFavourite = favourites.some((value: any) => value.id === id);
  }

  return (
    <div className="icon">
      {isFavourite ? (
        <BasicButton type="button" onClick={() => handleDelete(props)}>
          <Image src={solidHeartIcon} width={20} height={20} alt={"hearted"} />
        </BasicButton>
      ) : (
        <BasicButton type="button" onClick={() => addFavourite(props)}>
          <Image src={heartIcon} width={20} height={20} alt={"heart"} />
        </BasicButton>
      )}
    </div>
  );
};

export default FavouriteActions;
