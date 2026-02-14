import ProductsPreview from "../components/ProductsPreview";
import HeroSport from "../components/HeroSport";
import AboutHome from "../components/AboutHome";
import ServiceHome from "@/components/ServiceHome";

export default function Home() {
  return (
    <>
      <HeroSport />
      <div id="about">
      <AboutHome /></div>
      <div id="product">
      <ProductsPreview /></div>

      <ServiceHome />
    </>
  );
}
