export const categories = [
  "meals",
  "entres",
  "deserts",
  "salads",
  "sides",
  "drinks",
];

export const categoriesId = () => {
  return categories.map((category) => {
    return {
      params: {
        id: category.toLowerCase().toString(),
      },
    };
  });
};
