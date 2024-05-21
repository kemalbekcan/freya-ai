import { Sidebar, Navigation, Products } from "@/components";
// import { getData } from "@/api";
// import { desc } from "@/utils";
// import { IProduct } from "@/types/product";

const Index = () => {
  return (
    <main className="flex items-center justify-between h-screen border">
      <Sidebar />
      <div className="flex-1 h-full bg-white p-5">
        <Navigation />

        <div className="flex flex-wrap gap-5">
          test
        </div>
      </div>
    </main>
  )
}

export default Index
