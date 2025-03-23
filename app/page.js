import NewsArticles from "./components/news_and_articles";
import Opticamedia from "./components/optica_media";
import Quotes from "./components/quotes";
import Resources from "./components/resources";


export default function Home() {
  return (
    <>
    <Quotes/>
    <Opticamedia/>
    <NewsArticles/>
    <Resources/>
    </>
  );
}
