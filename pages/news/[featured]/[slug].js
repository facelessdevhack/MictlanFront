import Header from "../../components/Header";
import { motion } from "framer-motion";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

function slug({ news }) {
  console.log(news);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Header />
      <div style={{ width: "50%", margin: "0 auto", paddingTop: "10vh" }}>
        <h2 style={{ color: "white" }}>{news.title}</h2>
        <p
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: news.description }}
        ></p>
      </div>
    </motion.div>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/featured-news?slug=${slug}`);
  const data = await res.json();
  console.log(slug);
  return {
    props: {
      news: data[0],
    },
  };
}

export default slug;
