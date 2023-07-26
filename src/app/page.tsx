import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import NavBar from "@/components/navigation/NavBar";
import { prisma } from "@/db";
import { Banner } from "@prisma/client";
import { useEffect } from "react";

export default function Home() {
  const data: Omit<Banner, "id">[] = [
    {
      image:
        "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84927.jpg",
      alt: "Frozen blended drink with colorful swirls in a tall glass.",
      title: "Tropical cooldown",
      content: `Kick back with our vibrant new Frozen Pineapple Passionfruit Lemonade Starbucks Refreshers® beverage.`,
      buttonLink: "https://www.starbucks.com/menu/product/2123767/iced",
      buttonText: "Order now",
      backgroundColor: "#eb81a5",
      textColor: "#1e3932",
      position: 1,
    },
    {
      image:
        "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84954.jpg",
      alt: "SUMMER WINSDAYS logo on a multi-colored background with a frozen refresher.",
      title: "Now 50% off cold drinks",
      content: `WinsDays just got even cooler for Starbucks® Rewards
      members. Now enjoy 50% off a cold drink on Wednesdays
      after 12 p.m.*`,
      buttonLink: "https://starbucks.app.link/23P2Qm5Nbtb",
      buttonText: "Join for free",
      backgroundColor: "#e5ff67",
      textColor: "#006241",
      position: 2,
    },
    {
      image:
        "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84930.jpg",
      alt: "Two blended cold coffee drinks with whipped cream in tall glasses.",
      title: "Summer to the max",
      content: `Go for a Mocha Cookie Crumble or Caramel Ribbon Crunch
      Frappuccino® blended beverage.`,
      buttonLink:
        "https://www.starbucks.com/menu/drinks/frappuccino-blended-beverages",
      buttonText: "Order now",
      backgroundColor: "#8f8bf4",
      textColor: "#000000",
      position: 3,
    },
    {
      image:
        "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84933.jpg",
      alt: "Bee-shaped cake pop decorated with yellow icing and black stripes.",
      title: "Follow the buzz",
      content: `This adorable Bumblebee Cake Pop dipped in chocolatey
      icing has landed.`,
      buttonLink: "https://www.starbucks.com/menu/product/2123754/single",
      buttonText: "Order now",
      backgroundColor: "#f1ff67",
      textColor: "#1e3932",
      position: 4,
    },
    {
      image:
        "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84617.jpg",
      alt: "An illustration of a Starbucks hot cup on a green background with a green heart next to it. To the right is the orange Headspace app logo, a green flower and a minimal illustration of a pink coffee mug.",
      title: "Be kind to your mind",
      content: ` We teamed up with Headspace to bring you four free
      meditations on kindness, plus a special offer for
      Starbucks® Rewards members—discover more mindfulness
      with a two-month free membership.**`,
      buttonLink: "https://www.headspace.com/starbucksrewards",
      buttonText: "Listen now",
      backgroundColor: "#e1fccd",
      textColor: "#1e3932",
      position: 4,
    },
  ];
  async function createBanner(data: Omit<Banner, "id">) {
    // Find the highest current position
    const lastBanner = await prisma.banner.findFirst({
      orderBy: {
        position: "desc",
      },
    });

    const newPosition = lastBanner ? lastBanner.position + 1 : 1;

    console.log({ lastBanner });
    // Create a new banner with the incremented position
    // const newBanner = await prisma.banner.create({
    //   data: {
    //     ...data,
    //     position: newPosition,
    //   },
    // });
    // console.log(newBanner);

    // return newBanner;
  }
  createBanner(data[0]);
  // Create the banners
  // data.forEach(async (banner) => {

  // });

  return (
    <div>
      <NavBar />
      <main className="my-6 space-y-10">
        {data.map((hero, id) => (
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
