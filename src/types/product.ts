export interface IProduct {
  sort(arg0: (a: any, b: any) => number): any;
  id: number;
  images: string;
  description: string;
  title: string;
  price: number;
}
