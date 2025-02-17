"use client";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { useEffect, useState } from "react";
const Header = ({ slice }) => {
  console.log(slice, 111);

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let client = createClient();
      const response = await client.getByUID("navigation", "navigation-uid");
      setData(response.data);
    };
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <nav className="bg-[#F9F4EF] py-4 px-4 md:px-16">
        {/* Top row: Left side nav items (on desktop), center logo, right side actions */}
        <div className="flex items-center justify-between">
          {/* Left nav (desktop) */}
          <ul className="hidden md:flex gap-10 uppercase text-black items-center">
            {data.nav_items.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                {/* Text link */}
                <PrismicNextLink field={item.nav_link}>
                  {item.nav_link?.text}
                </PrismicNextLink>
                {/* Icon (if any) */}
                {item.nav_item_image?.url && (
                  <PrismicNextImage
                    alt={item.nav_item_image.alt || "img"}
                    height={16}
                    width={16}
                    field={item.nav_item_image}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Center logo */}
          <div className="flex-shrink-0 mx-4">
            <Link href="/">
              <PrismicNextImage
                alt={data.nav_logo?.alt || "Logo"}
                field={data.nav_logo}
              />
            </Link>
          </div>

          {/* Right nav actions (desktop) */}
          <ul className="hidden md:flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full border-b bg-transparent border-[#004D43] placeholder-gray-500 px-2 focus:outline-none text-[#004D43]"
            />
            {data.nav_actions.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer flex items-center gap-2"
              >
                {item.action_image?.url && (
                  <PrismicNextImage
                    height={16}
                    width={16}
                    alt={item.action_image.alt || "Action icon"}
                    field={item.action_image}
                  />
                )}
                {/* Link if needed */}
                <PrismicNextLink field={item.action_link} />
              </li>
            ))}
          </ul>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden block text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {/* Simple hamburger icon (SVG) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-6">
            {/* Nav items (mobile) */}
            <ul className="flex flex-col gap-4 uppercase text-black items-center">
              {data.nav_items.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <PrismicNextLink field={item.nav_link}>
                    {item.nav_link?.text}
                  </PrismicNextLink>
                  {item.nav_item_image?.url && (
                    <PrismicNextImage
                      alt={item.nav_item_image.alt || "img"}
                      height={16}
                      width={16}
                      field={item.nav_item_image}
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* Actions (mobile) */}
            <ul className="flex flex-row gap-6 items-center">
              {data.nav_actions.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer flex items-center gap-2"
                >
                  {item.action_image?.url && (
                    <PrismicNextImage
                      height={16}
                      width={16}
                      alt={item.action_image.alt || "Action icon"}
                      field={item.action_image}
                    />
                  )}
                  <PrismicNextLink field={item.action_link} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Header;
