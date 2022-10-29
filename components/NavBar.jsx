import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  const MENU_LIST = [
    { text: "Home", href: "/", pathName: "" },
    { text: "Recipes", href: "/recipes", pathName: "recipes" },
    { text: "Videos", href: "/contact", pathName: "contact" },
    { text: "Contact", href: "/contact", pathName: "contact" },
  ];

  const newLocal =
    "border-y-[1px] border-primary text-center justify-center mx-auto lg:max-w-6xl md:items-center md:flex md:px-8";
  return (
    <>
      <div className="h-32 w-80 relative mx-auto ">
        <Image
          alt="Mountains"
          src="/logo.webp"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <nav className="w-full">
        <div className={newLocal}>
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="md:hidden mx-auto">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`md:block  ${navbar ? "block" : "hidden"}`}>
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0 md:text-lg">
                {MENU_LIST.map((item) => (
                  <li
                    className={`md:w-2/4 p-4 w-20 mx-auto text-primary ${
                      router.pathname.split("/")[1] === item.pathName
                        ? "bg-secondary font-bold text-md"
                        : ""
                    }`}
                    key={item.text}
                  >
                    <Link href={item.href}>
                      <a>{item.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
