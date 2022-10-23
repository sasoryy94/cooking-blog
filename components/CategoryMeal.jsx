import Image from "next/image";

export const CategoryMeal = ({ img, category }) => {
  return (
    <section>
      <div className="w-80 h-80 md:w-[13rem] md:h-[13rem] lg:w-[20rem] lg:h-[20rem] relative mx-auto my-4 transform transition duration-300 hover:cursor-pointer hover:scale-105">
        <Image alt="Mountains" src={img} layout="fill" objectFit="cover" />
        <div className="absolute border-[5px] border-[rgba(255,255,255,.3)] w-[95%] m-auto inset-0 h-[95%]"></div>
        <div className="absolute w-1/4 mx-auto py-2.5 bottom-4 inset-x-0 bg-slate-100 text-slate-800 text-sm md:text-lg lg:text-xl text-center leading-4">
          {category}
        </div>
      </div>
    </section>
  );
};
