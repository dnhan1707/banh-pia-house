import Hero from "./sections/Hero";
import Header from "./components/Header";
import OwnerIntro from "./sections/OwnerIntro";
import Products from "./sections/Products";

export default function Home() {
  return (
    <div>
        <Header></Header>
        <Hero></Hero>
        <OwnerIntro></OwnerIntro>
        <Products></Products>
    </div>
  );
}
