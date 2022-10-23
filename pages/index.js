import Head from "next/head";
import { CategoryMeal } from "../components/CategoryMeal";
import { MainLayout } from "../components/layouts/mainLayout";
import Map from "../components/Map";

export default function Home() {
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
    </MainLayout>
  );
}
