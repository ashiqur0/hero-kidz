import Banner from "@/components/home/Banner";
import Products from "./products/page";

export default function Home() {
  return (
    <div className="">
      <section>
        <Banner />
      </section>

      <section>
        <Products />
      </section>
    </div>
  );
}
