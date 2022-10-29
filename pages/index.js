import Head from "next/head";
import { CategoryMeal } from "../components/CategoryMeal";
import LastRecipes from "../components/LastRecipes";
import { MainLayout } from "../components/layouts/MainLayout";
import Map from "../components/Map";
import { getSortedrecipesData } from "../lib/recipes";

export default function Home({ allrecipesData }) {
  return (
    <MainLayout>
      <Head>
        <title> La poesia del sabor </title>
        <meta name="description" content="la poesia del sabor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Map />
      <section className="md:flex  justify-between mx-auto lg:max-w-6xl mt-24 ">
        <CategoryMeal img="/meal.jpeg" category="Meals" />
        <CategoryMeal img="/entres.jpeg" category="Entres" />
        <CategoryMeal img="/deserts.jpeg" category="Deserts" />
      </section>
      <h2 className="text-xl text-primary md:text-2xl xl:text-3xl text-center my-4">
        =Last recipes=
      </h2>
      <LastRecipes data={allrecipesData} />
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
