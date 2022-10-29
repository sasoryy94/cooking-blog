import { MainLayout } from "../../components/layouts/MainLayout";
import { SearchRecipe } from "../../components/SearchRecipe";
import { getSortedrecipesData } from "../../lib/recipes";

export default function Categories({ allrecipesData }) {
  return (
    <MainLayout>
      <SearchRecipe data={allrecipesData} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const allrecipesData = getSortedrecipesData();
  return {
    props: {
      allrecipesData,
    },
  };
}
