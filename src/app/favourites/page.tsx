'use client';

import { Sidebar, Navigation, Products } from "@/components";
import { useAppSelector } from "@/hooks/hooks";
// import { getData } from "@/api";
import { desc } from "@/utils";
import { FavouriteBody } from "@/types/favourite";

const Index = () => {
  const favourites = useAppSelector((item) => item.favourite.favourites);
  return (
    <main className="flex items-center justify-between h-screen border">
      <Sidebar />
      <div className="flex-1 h-full bg-white p-5">
        <Navigation />

        <div className="flex flex-wrap gap-5">
          {favourites &&
            favourites.map((item: FavouriteBody) => {
              return <Products key={item.id} {...item} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default Index;
