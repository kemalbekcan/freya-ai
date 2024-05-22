import { FC, Fragment } from "react";
import Image from "next/image";
import { getImage } from "@/utils";
import { IProduct } from "@/types/product";
import { FavouriteActions } from "@/components";

const Products: FC<IProduct> = (props) => {
  return (
    <div className="card mb-[9px] h-[270px] ">
      <div className=" w-[100%] pt-6 pb-[23px] pr-3 pl-[13px] border-[0.5px] border-[#D6D6D6] rounded-[5px] flex justify-center items-center">
        <FavouriteActions {...props} />
        <div>
          <Image
            src={getImage(props.images)}
            alt={props.description}
            width={500}
            height={500}
          />
        </div>
      </div>
      <div>
        {/* Inter */}
        <h2 className="text-xs leading-6 font-light mt-[10px]">
          {props.title}
        </h2>
        <p className="text-xs leading-6 font-semibold">
          {props.price.toString()}TL
        </p>
      </div>
    </div>
  );
};

export default Products;
