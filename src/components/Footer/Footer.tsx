import { prisma } from "@/db";
import Link from "next/link";
import React from "react";

const Footer = async () => {
  async function getFooters() {
    const footers = await prisma.footer.findMany({
      include: {
        footerData: true,
      },
    });
    return footers;
  }
  //   async function createFooter() {
  //     const linkArr = Object.values(links);
  //     const footers = await getFooters();
  //     if (footers.length == 0)
  //       for (let i = 0; i < linkArr.length; i++) {
  //         const link = linkArr[i];
  //         const footer = await prisma.footer.create({
  //           data: {
  //             name: link.name,
  //           },
  //         });
  //         for (const item of link.data) {
  //           await prisma.footerData.create({
  //             data: {
  //               name: item.name,
  //               link: item.link,
  //               footerId: footer.id,
  //             },
  //           });
  //         }
  //       }
  //   }
  //   createFooter();
  const footers = await getFooters();
  console.log({ length: footers.length, footers });
  return (
    <div>
      <footer className="py4 relative footer_footer__aZrs8">
        <main className="sb-global-gutters sb-global-gutters--maxWidthLayout">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4 py-10">
            {footers.map((link, id) => (
              <div key={id}>
                <h2 className="sb-heading text-sm mb4">{link.name}</h2>
                <ul className="inline-block">
                  {link.footerData.map((link, id) => (
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
