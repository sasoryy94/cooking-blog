import Image from "next/image";
import Link from "next/link";
import React from "react";
import Date from "./Date";

export const Card = ({ img, title, subtitle, date, id }) => {
  return (
    <>
      <Link href={`/recipes/${id}`}>
        <a>
          <div className="w-80 h-80 md:w-[15rem] md:h-[10rem] lg:w-[25rem] lg:h-[15rem] 2xl:w-[30rem] 2xl:h-[20rem] relative mx-auto">
            <Image src={img} layout="fill" objectFit="cover" />
            <div className="absolute w-2/4 md:w-36 py-1 top-4 right-4 mx-2 inset-x-0 bg-secondary text-primary text-sm md:text-base text-center leading-4">
              <Date dateString={date} />
            </div>
          </div>
          <h2 className="text-center text-primary font-semibold text-lg lg:text-2xl">
            {title}
          </h2>
        </a>
      </Link>
      <p className="w-11/12 mx-auto md:w-[15rem] lg:w-[25rem] xl:w-[30rem] ">
        {" "}
        {subtitle}{" "}
      </p>
    </>
  );
};
