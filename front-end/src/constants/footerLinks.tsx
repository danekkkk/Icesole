import FACEBOOK_ICON from "../assets/FacebookIcon.tsx";
import YOUTUBE_ICON from "../assets/YouTubeIcon.tsx";
import INSTAGRAM_ICON from "../assets/InstagramIcon.tsx";
import TWITTER_ICON from "../assets/TwitterIcon.tsx";
import TIKTOK_ICON from "../assets/TikTokIcon.tsx";
import { ReactNode } from "react";

export const FOOTER_LINKS: {
  title: string;
  links: { linkName: string; path: string }[];
}[] = [
  {
    title: "Sklep",
    links: [
      {
        linkName: "Mężczyźni",
        path: "/mezczyzni",
      },
      {
        linkName: "Kobiety",
        path: "/kobiety",
      },
      {
        linkName: "Dzieci",
        path: "/dzieci",
      },
      {
        linkName: "Wyprzedaż",
        path: "#",
      },
    ],
  },
  {
    title: "Konto",
    links: [
      {
        linkName: "Zamówienia",
        path: "#",
      },
      {
        linkName: "Ulubione przedmioty",
        path: "#",
      },
      {
        linkName: "Ustawienia konta",
        path: "#",
      },
      {
        linkName: "Koszyk",
        path: "#",
      },
    ],
  },
  {
    title: "Pomoc",
    links: [
      {
        linkName: "Ustawienia plików cookies",
        path: "#",
      },
      {
        linkName: "FAQ",
        path: "#",
      },
      {
        linkName: "Polityka prywatności",
        path: "#",
      },
      {
        linkName: "Tabele rozmiarów",
        path: "#",
      },
      {
        linkName: "Regulamin sklepu",
        path: "#",
      },
    ],
  },
  {
    title: "O nas",
    links: [
      {
        linkName: "Kontakt",
        path: "#",
      },
      {
        linkName: "Nasza historia",
        path: "#",
      },
      {
        linkName: "Praca",
        path: "#",
      },
    ],
  },
];

export const FOOTER_SOCIALMEDIA_LINKS: {
  linkName: string;
  linkImg: () => ReactNode;
  path: string;
}[] = [
  {
    linkName: "Facebook",
    linkImg: FACEBOOK_ICON,
    path: "#",
  },
  {
    linkName: "Youtube",
    linkImg: YOUTUBE_ICON,
    path: "#",
  },
  {
    linkName: "Instagram",
    linkImg: INSTAGRAM_ICON,
    path: "#",
  },
  {
    linkName: "Twitter",
    linkImg: TWITTER_ICON,
    path: "#",
  },
  {
    linkName: "Tiktok",
    linkImg: TIKTOK_ICON,
    path: "#",
  },
];
