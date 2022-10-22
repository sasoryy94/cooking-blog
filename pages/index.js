import dynamic from "next/dynamic";
import Head from "next/head";
import { MainLayout } from "../components/layouts/mainLayout";
// import { WorldMap } from "../components/WorldMap";

export default function Home() {
  const DynamicMap = dynamic(() => import("../components/WorldMap"), {
    ssr: false,
  });
  return (
    <MainLayout>
      <Head>
        <title> La poesia del sabor </title>
        <meta name="description" content="la poesia del sabor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicMap />
    </MainLayout>
  );
}
