import { MainLayout } from "../../components/layouts/MainLayout";
import { getAllPostIds, getPostData } from "../../lib/recipes";

export default function Recipes({ postData }) {
  return (
    <MainLayout>
      <div className="prose prose-zinc prose-h1:text-center md:prose-lg lg:prose-xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
