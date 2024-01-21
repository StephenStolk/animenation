import Card, { SeriesProp } from "@/components/AnimeCard";
import Load from "../components/Load";
import { data } from "./_data";

async function Home() {
  return (
    <section className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: SeriesProp, index) => (
          <Card key={item.id} anime={item} index={index} />
        ))}
      </section>
      <Load />
    </section>
  );
}

export default Home;
