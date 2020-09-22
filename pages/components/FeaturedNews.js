import Link from "next/link";
import fetch from "isomorphic-unfetch";
import "../assets/css/featurednewscomponents.scss";

const FeaturedNews = ({ featuredNew }) => {
  console.log({ featuredNew });
  const { API_URL } = process.env;
  return (
    <Link
      href="/news/[featured]/[slug]"
      as={`/news/${featuredNew.featured.slug}/${featuredNew.slug}`}
    >
      <div id="fea-card">
        <img src={API_URL + featuredNew.featured_video.url}></img>
        <p id="fealine">{featuredNew.title}</p>
      </div>
    </Link>
  );
};
// export async function getServerSideProps() {
//   const { API_URL } = process.env;

//   const res = await fetch(`${API_URL}/featured-news`);
//   const data = await res.json();

//   return {
//     props: {
//       featuredNews: data,
//     },
//   };
// }
export default FeaturedNews;
