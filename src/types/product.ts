export interface IProduct {
  sort(arg0: (a: any, b: any) => number): any;
  id: number;
  price: number
  title: string;
  updatedAt: Date;
  images: any;
  description: string;
  creationAt: Date;
  category: {
    creationAt: Date;
    id: number;
    image: string;
    name: string;
    updatedAt: Date;
  };
}
