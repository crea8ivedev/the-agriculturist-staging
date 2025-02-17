"use client";
import { useState } from "react"; // Import useState for managing tab state
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const products = [
  {
    name: "Product Name",
    price: 449,
    oldPrice: 699,
    discount: 39,
    rating: 5,
    imageUrl:
      "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
  },
  {
    name: "Product Name",
    price: 499,
    oldPrice: 799,
    discount: 38,
    rating: 4,
    imageUrl:
      "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
  },
  {
    name: "Product Name",
    price: 389,
    oldPrice: 649,
    discount: 40,
    rating: 4,
    imageUrl:
      "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
  },
  {
    name: "Product Name",
    price: 389,
    oldPrice: 649,
    discount: 40,
    rating: 4,
    imageUrl:
      "https://images.prismic.io/the-agriculturist-staging/Z69A9JbqstJ9-ol4_img.jpg?auto=format,compress",
  }
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-[#CDBAA7] bg-white shadow-md"
        >
          <a
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            href="#"
          >
            <img
              className="object-cover mx-auto"
              src={product.imageUrl}
              alt="product image"
            />
          </a>

          <div className="flex flex-col justify-center items-center mt-4 px-5 pb-5 space-y-4">
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, idx) => (
                <svg
                  key={idx}
                  aria-hidden="true"
                  className={`h-5 w-5 ${idx < product.rating ? "text-yellow-300" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <a href="#" className="text-center">
              <h5 className="text-xl tracking-tight text-slate-900">
                {product.name}
              </h5>
            </a>

            <div className="text-center">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  ${product.price}
                </span>
                <span className="text-sm text-slate-900 line-through">
                  ${product.oldPrice}
                </span>
              </p>
            </div>

            <button className="inline-block px-6 py-3 text-lg rounded-full bg-[#004D43] text-white text-center mx-auto">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const FeaturedProducts = ({ slice }) => {
  const [activeTab, setActiveTab] = useState("bestSellers");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      style={{
        backgroundColor: slice.primary.background_color || "#F8F5F1",
      }}
      className="py-12 px-4"
    >
      {/* Optional Title/Sub-Title */}
      {slice.primary.sub_title && (
        <div className="flex justify-center mb-6">
          <PrismicRichText
            field={slice.primary.sub_title}
            components={{
              paragraph: ({ children }) => (
                <p
                  className="text-base font-medium font-body sm:text-left text-center"
                  style={{
                    color: slice.primary.sub_title_color || "#004D43",
                  }}
                >
                  {children}
                </p>
              ),
            }}
          />
        </div>
      )}

      {slice.primary.title && (
        <div className="flex justify-center mb-4">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2
                  className="text-5xl md:text-3xl font-bold text-center"
                  style={{
                    color: slice.primary.title_color || "#004D43",
                  }}
                >
                  {children}
                </h2>
              ),
            }}
          />
        </div>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-8">
        <button
          onClick={() => handleTabClick("bestSellers")}
          className={`px-6 py-3 text-lg rounded-full mx-2 ${
            activeTab === "bestSellers"
              ? "border-[#004D43] border-2 text-[#004D43]"
              : "text-gray-500"
          }`}
        >
          BEST SELLERS
        </button>
        <button
          onClick={() => handleTabClick("newArrivals")}
          className={`px-6 py-3 text-lg rounded-full mx-2 ${
            activeTab === "newArrivals"
              ? "border-[#004D43] border-2 text-[#004D43]"
              : "text-gray-500"
          }`}
        >
          NEW ARRIVALS
        </button>
        <button
          onClick={() => handleTabClick("seasonalDrops")}
          className={`px-6 py-3 text-lg rounded-full mx-2 ${
            activeTab === "seasonalDrops"
              ? "border-[#004D43] border-2 text-[#004D43]"
              : "text-gray-500"
          }`}
        >
          SEASONAL DROPS
        </button>
      </div>

      {/* Product Grid */}
      <ProductGrid />

      {slice.primary.button_text && slice.primary.button_link && (
        <div className="flex justify-center">
          <PrismicNextLink
            field={slice.primary.button_link}
            className="inline-block px-6 py-3 text-lg rounded-full"
            style={{
              backgroundColor:
                slice.primary.button_background_color || "#1E3932",
              color: slice.primary.button_text_color || "white",
            }}
          >
            {slice.primary.button_text}
          </PrismicNextLink>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
