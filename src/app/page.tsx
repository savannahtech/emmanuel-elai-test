import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import NavBar from "@/components/navigation/NavBar";
import { prisma } from "@/db";
import { Banner } from "@prisma/client";

export default async function Home() {
  async function createBanner(data: Omit<Banner, "id">[]) {
    // Find the highest current position

    const banners = await getBanners();
    if (banners.length === 0) {
      // Create a new banner with the incremented position
      await prisma.banner.createMany({
        data: data,
      });
    }
  }
  // createBanner(data);

  function getBanners() {
    // Find the highest current position
    const banners = prisma.banner.findMany({
      orderBy: {
        position: "asc",
      },
    });
    return banners;
  }
  const banners = await getBanners();

  return (
    <div>
      <NavBar />
      <main className="my-6 space-y-10">
        {banners.map((hero, id) => (
          <Hero
            position={id % 2 != 0 ? "right" : "left"}
            key={id}
            data={hero}
          />
        ))}
        <div className="flex items-center justify-center mb-24">
          <div className="xs rich-text_text__APy_s rich-text_width__3DGrd">
            <p className="my-14">
              *Offer valid 7/26/23, 8/2/23, and 8/9/23 after 12 p.m. at
              participating stores. Excludes bottled or canned drinks and
              alcohol. Limit one per person. Cannot be combined with other
              offers or discounts. Offer not available through Starbucks®
              Delivers on Uber Eats or DoorDash.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="xs rich-text_text__APy_s rich-text_width__3DGrd">
            <p className="my-14">
              **After your two-month free trial, exclusive to Starbucks® Rewards
              members, the subscription renews automatically at $69.99 USD for
              an annual subscription to Headspace. You can cancel at any time.
              This offer is for new and returning Headspace users only.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
