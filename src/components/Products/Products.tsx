import { FC } from "react";
import Image from "next/image";
import { getImage } from "@/utils";
import { IProduct } from "@/types/product";

const Products: FC<IProduct> = ({ images, description, title }) => {
  return (
    <div className="w-[170px] h-[276px] border">
      <Image
        src={getImage(images)}
        alt={description}
        width={500}
        height={500}
      />
      {title}
    </div>
  );
};

export default Products;
