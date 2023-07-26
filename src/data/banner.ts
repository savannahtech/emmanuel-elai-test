import { Banner } from "@prisma/client";

export const data: Omit<Banner, "id">[] = [
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
    position: 5,
  },
];

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
