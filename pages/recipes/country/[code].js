import { MainLayout } from "../../../components/layouts/MainLayout";
import { SearchRecipe } from "../../../components/SearchRecipe";
import { countriesId } from "../../../lib/countries";
import { getSortedrecipesData } from "../../../lib/recipes";

export default function Country({ code, RecipesCountry }) {
  return (
    <MainLayout>
      <SearchRecipe
        data={RecipesCountry}
        title={`Last recipes from ${code}`}
        placeholder={` Type recipe from ${code} you want to search`}
        categories={false}
      />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const country = countriesId();
  return {
    paths: country,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { code } = params;
  const allrecipesData = getSortedrecipesData();
  const RecipesCountry = allrecipesData.filter(
    (recipe) => recipe.country === code
  );
  return {
    props: {
      code,
      RecipesCountry,
    },
  };
}
