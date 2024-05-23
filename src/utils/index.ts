import { IProduct } from "@/types/product";

const isJSON = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

export const getImage = (image: string) => {
  if (isJSON(image)) {
    const parseImage = JSON.parse(image);
    return parseImage[0];
  }

  return image[0];
};

export const getTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${hours}.${minutes}`;
};
