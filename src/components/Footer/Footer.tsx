"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = {
    aboutUs: {
      name: "About Us",
      data: [
        {
          name: "Our Company",
          link: "https://www.starbucks.com/about-us/",
        },
        {
          name: "Our Coffee",
          link: "https://www.starbucks.com/about-us/",
        },
        {
          name: "Stories and News ",
          link: "https://www.starbucks.com/about-us/",
        },
        {
          name: "Starbucks Archive",
          link: "https://www.starbucks.com/about-us/",
        },
        {
          name: "Investor Relations",
          link: "https://www.starbucks.com/about-us/",
        },
        {
          name: "Customer Service",
          link: "https://www.starbucks.com/about-us/",
        },
      ],
    },
    careers: {
      name: "Careers",
      data: [
        {
          name: "Culture and Values",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "Inclusion, Diversity, and Equity",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "College Achievement Plan",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "Alumni Community",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "U.S. Careers",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "International Careers",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
      ],
    },
    socialImpact: {
      name: "Social Impact",
      data: [
        {
          name: "People",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "Planet",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "Environmental and social Impact Reporting",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
      ],
    },
    forBusinessPartners: {
      name: "For Business Partners",
      data: [
        {
          name: "Landlord Support Center",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "Suppliers",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "Corporate Gift Card Sales",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "Office and FoodService Coffee",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
      ],
    },
    orderAndPickUp: {
      name: "Order And Pickup",
      data: [
        {
          name: "Order on the App",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "Order on the Web",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "Delivery",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
        {
          name: "Order and Pick Up Options",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },

        {
          name: "Explore and Find Coffee for Home",
          link: "https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/",
        },
      ],
    },
  };
  return (
    <div>
      <footer className="py4 relative footer_footer__aZrs8">
        <main className="sb-global-gutters sb-global-gutters--maxWidthLayout">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4 py-10">
            {Object.values(links).map((link, id) => (
              <div key={id}>
                <h2 className="sb-heading text-sm mb4">{link.name}</h2>
                <ul className="inline-block">
                  {link.data.map((link, id) => (
                    <li key={id}>
                      <Link
                        className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
                        href={link.link}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
        <div className="px-12 mt-24">
          <ul className="inline-block mt3 lg-mb1 lg-flex ">
            <li className="items-center lg-flex lg-text-center">
              <a
                className="block sb-footer-secondaryLinks mb1 py2 lg-mb0 lg-py0 lg-pr3"
                href="https://www.starbucks.com/terms/privacy-policy/"
              >
                Privacy Notice
              </a>
            </li>
            <li className="items-center lg-flex lg-text-center">
              <span
                aria-hidden="true"
                className="color-textBlackSoft px2 hidden lg-inline"
              >
                |
              </span>
              <a
                className="block sb-footer-secondaryLinks mb1 py2 lg-mb0 lg-py0 lg-px3"
                href="https://www.starbucks.com/terms/starbucks-terms-of-use/"
              >
                Terms of Use
              </a>
            </li>
            <li className="items-center lg-flex lg-text-center">
              <span
                aria-hidden="true"
                className="color-textBlackSoft px2 hidden lg-inline"
              >
                |
              </span>
              <a
                className="block sb-footer-secondaryLinks mb1 py2 lg-mb0 lg-py0 lg-px3"
                href="https://www.starbucks.com/personal-information"
                id="personal-information"
              >
                Do Not Share My Personal Information
              </a>
            </li>
            <li className="items-center lg-flex lg-text-center">
              <span
                aria-hidden="true"
                className="color-textBlackSoft px2 hidden lg-inline"
              >
                |
              </span>
              <a
                className="block sb-footer-secondaryLinks mb1 py2 lg-mb0 lg-py0 lg-px3"
                href="https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf"
              >
                CA Supply Chain Act
              </a>
            </li>
            <li className="items-center lg-flex lg-text-center">
              <span
                aria-hidden="true"
                className="color-textBlackSoft px2 hidden lg-inline"
              >
                |
              </span>
              <button className="block sb-footer-secondaryLinks mb1 py2 lg-mb0 lg-py0 lg-px3">
                Cookie Preferences
              </button>
            </li>
          </ul>
          <p className="color-textBlackSoft py3 text-xxs">
            © 2023 Starbucks Coffee Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
