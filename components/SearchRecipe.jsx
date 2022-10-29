import React, { useState } from "react";
import { CategoryContainer } from "./CategoryContainer";
import LastRecipes from "./LastRecipes";

export const SearchRecipe = ({
  data,
  title = "Last recipes",
  placeholder = " Search for a recipe",
  categories = true,
}) => {
  const [state, setstate] = useState({
    query: "",
    list: data,
  });
  const handleChange = (e) => {
    const results = data.filter((recipe) => {
      if (e.target.value === "") return data;
      return recipe.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setstate({
      query: e.target.value,
      list: results,
    });
  };
  return (
    <div>
      {" "}
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-10 lg:items-center ">
        <h2 className="text-xl md:text-2xl xl:text-3xl text-center my-4">
          What are you hungry for ?
        </h2>
        <form className="text-center">
          <input
            className="border-2 border-slate-500 rounded-md h-10 lg:w-96 lg:h-12"
            type="search"
            placeholder={placeholder}
            value={state.query}
            onChange={handleChange}
          />
        </form>
      </div>
      {categories ? <CategoryContainer /> : null}
      <h2 className="text-xl md:text-2xl xl:text-3xl text-center my-4">
        ={title}=
      </h2>
      {!state.list.length ? "" : <LastRecipes data={state.list} />})
    </div>
  );
};
