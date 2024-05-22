"use client";

import useSWR from "swr";
import React, { useEffect } from "react";
import { Sidebar, Navigation, Products, Loading, Error } from "@/components";
import { getData } from "@/api";
import { desc } from "@/utils";
import { IProduct } from "@/types/product";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { getProducts } from "@/lib/features/product/productSlice";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const Home = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading } = useSWR(
    "https://api.escuelajs.co/api/v1/products",
    fetcher
  );

  const products = useAppSelector((item) => item.product.products);

  useEffect(() => {
    if (products?.length == 0) {
      dispatch(getProducts(products));
    }
  }, [dispatch, products]);

  if (error) return <Error />;
  if (isLoading) return <Loading />;

  return (
    <main className="flex items-center justify-between h-screen border">
      <Sidebar />
      <div className="flex-1 h-full bg-white p-5">
        <Navigation filterName={"products"} />

        <div className="flex flex-wrap gap-5">
          {products &&
            products.map((item: IProduct) => {
              return <Products key={item.id} {...item} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default Home;
