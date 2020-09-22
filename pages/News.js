import Header from "./components/Header";
import BackgroundVideo from "./components/backgroundvideo";
import { motion } from "framer-motion";
import "./assets/css/news.scss";
import FeaturedNews from "./components/FeaturedNews";

const News = ({ featuredNews }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Header />
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
    </motion.div>
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
