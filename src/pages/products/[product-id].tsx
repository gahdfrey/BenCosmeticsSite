import { useRouter } from "next/router";
import Image from "next/image";
import { TAB_DATA, SHARED_FEATURES } from "../../../config/constants";

export default function ProductPage() {
  const router = useRouter();
  const { "product-id": productId } = router.query;

  // Find the product from TAB_DATA based on the URL
  const product = TAB_DATA.find(
    (item) => item.link.split("/").pop() === productId
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl text-center">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src={product.image}
              alt={product.heading}
              fill
              className="object-contain rounded-lg"
              priority
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
                {product.description.fullDescription}
              </p>
            </div>

            {/* Key Ingredients */}
            <div className="mt-6">
              <h2 className="text-xl font-medium mb-3">Key Ingredients</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.description.keyIngredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mt-6">
              <h2 className="text-xl font-medium mb-3">Benefits</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.description.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Use */}
            <div className="mt-6">
              <h2 className="text-xl font-medium mb-3">How to Use</h2>
              <p className="text-gray-700">{product.description.howToUse}</p>
            </div>

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
