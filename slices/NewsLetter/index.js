import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.NewsLetterSlice} NewsLetterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsLetterSlice>} NewsLetterProps
 * @type {import("react").FC<NewsLetterProps>}
 */
const NewsLetter = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden text-center px-5 py-20 rounded-lg border-2 space-y-6"
      style={{
        backgroundColor: slice.primary.background_color || "#F8F5F1",
      }}
    >
      {/* Background Images */}
      {slice.primary.background_image?.url && (
        <>
          {/* Bottom Left Image */}
          <PrismicNextImage
            field={slice.primary.background_image}
            className="absolute bottom-[-20px] left-[-20px] h-32 w-32 md:h-40 md:w-40 object-contain opacity-50"
            alt="background"
          />
          {/* Top Right Rotated Image */}
          <PrismicNextImage
            field={slice.primary.background_image}
            className="absolute top-[-20px] right-[-20px] h-32 w-32 md:h-40 md:w-40 object-contain opacity-50 rotate-180"
            alt="background rotated"
          />
        </>
      )}

      {/* Preheading */}
      {slice.primary.preheading && (
        <p
          className="text-base uppercase text-gray-500 mb-2"
          style={{
            color: slice.primary.preheading_color || "white",
          }}
        >
          {slice.primary.preheading}
        </p>
      )}

      {/* Title */}
      {slice.primary.title && (
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2
                className="text-5xl md:text-3xl font-bold mb-2"
                style={{
                  color: slice.primary.title_color || "#004D43",
                }}
              >
                {children}
              </h2>
            ),
          }}
        />
      )}

      {/* Description */}
      {slice.primary.description && (
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <p
                className="text-base mb-4 max-w-lg mx-auto"
                style={{
                  color: slice.primary.description_color || "#004D43",
                }}
              >
                {children}
              </p>
            ),
          }}
        />
      )}

      {/* Email Input & Button */}
      <div className="relative mt-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder={slice.primary.placeholder_text || "Enter your email"}
          className="w-full px-4 py-3 pr-32 rounded-full border-2 outline-none text-lg text-[#004D43]/35"
          style={{
            borderColor: slice.primary.border_color || "#004D43",
          }}
        />

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-full font-bold text-white text-lg"
          style={{
            backgroundColor: slice.primary.button_background_color || "#1E3932",
          }}
        >
          {slice.primary.button_text || "Subscribe"}
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
