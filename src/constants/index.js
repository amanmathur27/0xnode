import { twitter, send, shield, star, discord, mail  } from "../assets";

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "about",
    title: "About",
  },
];


export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Portfolio",
        link: "portfolio",
      },
      {
        name: "White-Paper",
        link: "#",
      },
      {
        name: "Contact Us",
        link: "#",
      },
      {
        name: "Explore",
        link: "#",
      },
      {
        name: "Terms & Services",
        link: "#",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "#",
      },
      {
        name: "Partners",
        link: "#",
      },
      {
        name: "Suggestions",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Newsletters",
        link: "#",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "#",
      },
      {
        name: "Become a Partner",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "twitter",
    icon: twitter,
    link: "https://twitter.com/0xfork_xyz",
  },
  {
    id: "discord",
    icon: discord,
    link: "https://discord.gg/MRuGArYK/",
  },
  {
    id: "email",
    icon: mail,
    link: "mailto:ping@0xfork.xyz",
  },
];