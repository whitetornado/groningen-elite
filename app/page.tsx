import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedProducts from "@/components/FeaturedProducts";
import Story from "@/components/Story";
import Details from "@/components/Details";
import Palette from "@/components/Palette";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <FeaturedProducts />
        <Story />
        <Details />
        <Palette />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
