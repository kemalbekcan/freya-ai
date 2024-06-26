"use client";

// import useSWR from "swr";
import React, { useEffect, useState, Suspense } from "react";
import { Sidebar, Navigation, Products, Loading, Error } from "@/components";
import { IProduct } from "@/types/product";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { getProducts } from "@/lib/features/product/productSlice";
import { useCustomSWR } from "@/lib/swr";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useAppDispatch();
  const products = useAppSelector((item) => item.product.products);
  const { data, error, isLoading } = useCustomSWR(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
  );

  useEffect(() => {
    if (data && (!products || products.length === 0)) {
      dispatch(getProducts(data));
    }
  }, [data, dispatch, products]);

  if (error || isLoading) {
    return (
      <Suspense fallback={<p>Loading feed...</p>}>
        <Loading />
      </Suspense>
    );
  }

  return (
    <main className="flex justify-between h-full">
      <Suspense fallback={<p>Loading feed...</p>}>
        <Sidebar isMobile={isMobile} setIsMobile={setIsMobile} />
      </Suspense>

      <div className="flex-1 h-full bg-white p-2 md:p-5">
        <Suspense fallback={<p>Loading feed...</p>}>
          <Navigation filterName={"products"} setIsMobile={setIsMobile} />
        </Suspense>

        <div className="flex flex-wrap gap-5 products">
          {products &&
            products?.map((item: IProduct) => {
              return (
                <Suspense key={item.id} fallback={<p>Loading feed...</p>}>
                  <Products {...item} />
                </Suspense>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Home;
