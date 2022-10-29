import LastRecipes from "../../../components/LastRecipes";
import { MainLayout } from "../../../components/layouts/MainLayout";
import { SearchRecipe } from "../../../components/SearchRecipe";
import { categoriesId } from "../../../lib/categories";
import { getSortedrecipesData } from "../../../lib/recipes";

export default function Categories({ id, RecipesCategory }) {
  console.log(id);
  return (
    <MainLayout>
      <SearchRecipe
        data={RecipesCategory}
        title={`Last ${id}`}
        placeholder={` Type ${id} you want to search`}
      />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const id = categoriesId();
  return {
    paths: id,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const allrecipesData = getSortedrecipesData();
  const RecipesCategory = allrecipesData.filter((cat) => cat.categories === id);
  return {
    props: {
      id,
      RecipesCategory,
    },
  };
}
