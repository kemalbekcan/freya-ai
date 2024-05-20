import Link from "next/link";
import { headers } from "next/headers";
import { navigationMenu } from "@/utils/constants";

const Navigation = () => {
  const pathname = headers().get("x-pathname") || "/";
  return (
    <ul className="flex justify-center gap-5 mb-6">
      {navigationMenu &&
        navigationMenu.map((item) => {
          const isActive = pathname == item.href;
          return (
            <li
              key={item.id}
              className={`p-1 ${isActive ? "border-b border-[#E14621]" : ""}`}
            >
              <Link
                href={item.href}
                className="text-lg leading-5 font-medium text-[#E14621]"
              >
                {item.title}
              </Link>
            </li>

            // Poppins
          );
        })}
    </ul>
  );
};

export default Navigation;
