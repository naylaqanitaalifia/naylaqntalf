import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import Experience from "@/sections/Experience";
import TechStack from "@/sections/TechStack";
import Footer from "@/sections/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Experience />
      <TechStack />

      <div className="mx-auto max-w-6xl py-8">
        <Footer />
      </div>
    </>
  );
}

export default Home;
