"use client";

import React, { useState, useEffect } from "react";
import { Sidebar, Navigation, Products, Loading } from "@/components";
import { useAppSelector } from "@/hooks/hooks";
// import { getData } from "@/api";
import { desc } from "@/utils";
import { FavouriteBody } from "@/types/favourite";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [loading, setLoading] = useState(true);

  const favourites = useAppSelector((item) => item.favourite.favourites);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  if (loading) return <Loading />;

  return (
    <main className="flex items-center justify-between h-screen border">
      <Sidebar isMobile={isMobile} setIsMobile={setIsMobile} />
      <div className="flex-1 h-full bg-white p-5">
        <Navigation setIsMobile={setIsMobile} />

        <div className="flex flex-wrap gap-5 products">
          {favourites &&
            favourites.map((item: FavouriteBody) => (
              <Products key={item.id} {...item} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Index;
