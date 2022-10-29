import Image from "next/image";
import Link from "next/link";

export const CategoryMeal = ({
  img,
  category,
  shape = "",
  size = "w-80 h-80 flex md:w-[12rem] md:h-[12rem] lg:w-[20rem] lg:h-[20rem]",
}) => {
  return (
    <div
      className={` ${size} relative mx-auto my-4 transform transition duration-300 hover:cursor-pointer hover:scale-105`}
    >
      <Link href={`recipes/categories/${category.toLowerCase()}`}>
        <a>
          <Image
            className={`${shape}`}
            alt="Mountains"
            src={img}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute border-[5px] border-[rgba(255,255,255,.3)] w-[95%] m-auto inset-0 h-[95%]"></div>
          <div className="absolute w-2/4 mx-auto py-2.5 bottom-4 inset-x-0 bg-secondary text-primary text-sm md:text-lg lg:text-xl text-center leading-4">
            {category}
          </div>
        </a>
      </Link>
    </div>
  );
};
