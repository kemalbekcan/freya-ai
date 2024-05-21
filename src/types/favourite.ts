export interface FavouriteState {
  favourites: FavouriteBody[] | null;
}

export interface FavouriteBody {
  id: number;
  price: number
  title: string;
  updatedAt: Date;
  images: any[];
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
