import Navbar from "./components/navbar";
import BackgroundVideo from "./components/backgroundvideo";
import FeaturedNews from "./components/FeaturedNews";
import fetch from "isomorphic-unfetch";
import "./assets/css/news.scss";
const News = ({ featuredNews }) => {
  return (
    <div>
      <Navbar />
      <BackgroundVideo source="/assets/videos/menu_background_video.mp4" />
      <div id="news-wrapper">
        <div id="news-left-wrapper">
          <div id="news-left-heading">
            <img id="horiline" src="/assets/images/horiline.png" />
            <p id="news-left-head">NEWS</p>
            <p id="news-left-subline">SEPTEMBER, 2020</p>
          </div>
          <div id="fea-wrapper">
            {featuredNews.map((featuredNew) => (
              <FeaturedNews key={featuredNew.id} featuredNew={featuredNew} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/featured-news`);
  const data = await res.json();

  return {
    props: {
      featuredNews: data,
    },
  };
}
export default News;
