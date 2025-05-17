// Remove this line since we're not using it
// import { useRouter } from "next/router";
import Image from "next/image";
import { SHARED_FEATURES } from "../../../config/constants";
import { getXataClient } from "../../lib/xata";
import { ProductsRecord } from "@/lib/types";

interface ProductPageProps {
  product: ProductsRecord;
}

export default function ProductPage({ product }: ProductPageProps) {
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl text-center">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="md:w-[860px] mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden w-[180px] md:w-[300px]">
            <Image
              src={product.image || ""}
              alt={product.heading || ""}
              fill
              className="object-cover rounded-lg"
              style={{ borderRadius: "8px" }} // Fallback inline style
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
              loading="eager"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-semibold text-[#22263F]">
              {product.heading}
            </h1>
            <p className="text-xl text-gray-600">{product.title}</p>

            {/* Product Description */}
            <div className="mt-6">
              <h2 className="text-2xl font-medium mb-4">About this product</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Benefits */}
            {product?.benefitLists && (
              <div className="mt-6">
                <h2 className="text-xl font-medium mb-3">Benefits</h2>
                <ul className="list-disc list-inside space-y-2">
                  {product?.benefitLists.map((benefit, index) => (
                    <li key={index} className="text-gray-700">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How to Use */}
            {product?.howToApply && (
              <div className="mt-6">
                <h2 className="text-xl font-medium mb-3">How to Use</h2>
                <p className="text-gray-700">{product?.howToApply}</p>
              </div>
            )}

            {product?.ingredients && (
              <div className="mt-6">
                <h2 className="text-2xl font-medium mb-4">Key Ingredients</h2>
                <ul className="list-disc list-inside space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed">
                      {ingredient.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Shared Features */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-medium mb-3">
                Additional Information
              </h2>
              <ul className="space-y-2">
                <li className="text-gray-700">{SHARED_FEATURES.cleanBeauty}</li>
                <li className="text-gray-700">{SHARED_FEATURES.packaging}</li>
                <li className="text-gray-700">
                  {SHARED_FEATURES.clinicalResults}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const xata = getXataClient();
  const { records: products } = await xata.db.products.getPaginated({
    pagination: { size: 100 },
  });

  const paths = products.map((product) => ({
    params: { "product-id": product.xata_id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { "product-id": string };
}) {
  const xata = getXataClient();
  const product = await xata.db.products.read(params["product-id"]);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: {
        ...product,
        xata_createdat: product.xata_createdat?.toISOString(),
        xata_updatedat: product.xata_updatedat?.toISOString(),
      },
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
