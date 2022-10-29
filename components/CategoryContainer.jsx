import { categories } from "../lib/categories";
import { CategoryMeal } from "./CategoryMeal";

export const CategoryContainer = () => {
  return (
    <section className="flex flex-wrap w-2/4 md:w-3/4 lg:w-full  justify-between mx-auto lg:max-w-6xl ">
      {categories.map((cat) => (
        <div className="flex flex-row" key={cat}>
          {" "}
          <CategoryMeal
            img="/meal.jpeg"
            category={cat}
            shape="rounded-full"
            size="w-20 h-20 flex md:w-[9rem] md:h-[9rem] lg:w-[10rem] lg:h-[10rem]"
          />
        </div>
      ))}
    </section>
  );
};
