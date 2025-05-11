import Hero from "@/Components/Hero";
import MainProduct from "@/Components/MainProduct";
import SubProducts from "@/Components/SubProducts";
import Contact from "@/Components/Contact";
import { getXataClient } from "../lib/xata";
import { ProductsRecord } from "../lib/types";

interface HomeProps {
  products: ProductsRecord[];
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Hero />
      <MainProduct />
      <SubProducts products={products} />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const xata = getXataClient();

  const { records: rawProducts } = await xata.db.products.getPaginated({
    pagination: {
      size: 15,
    },
  });

  // Convert Date objects to ISO strings for serialization
  const products = rawProducts.map((product) => ({
    ...product,
    xata_createdat: product.xata_createdat?.toISOString(),
    xata_updatedat: product.xata_updatedat?.toISOString(),
  }));

  return {
    props: {
      products,
    },
  };
}
