import { Sidebar, Navigation, Products } from "@/components";
import { getData } from "@/api";
import { desc } from "@/utils";
import { IProduct } from "@/types/product";

export default async function Home() {
  const data = await getData();

  // console.log("data", data);
  return (
    <main className="flex items-center justify-between h-screen border">
      <Sidebar />
      <div className="flex-1 h-full bg-green-200 p-5">
        <Navigation />

        <div className="flex flex-wrap gap-5">
          {data &&
            desc(data).map((item: IProduct) => {
              return <Products key={item.id} {...item} />;
            })}
        </div>
      </div>
    </main>
  );
}
