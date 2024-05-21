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

export const desc = (data: IProduct) => {
  return data.sort(
    (a: any, b: any) =>
      new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime()
  );
};

export const asc = (data: IProduct) => {
  return data.sort(
    (a: any, b: any) =>
      new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime()
  );
};

export const getTime = () => {
  const hours = new Date().getHours();
}