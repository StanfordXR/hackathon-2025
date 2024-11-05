import { Sponsor, SponsorTier } from "../types";

export const sponsors: SponsorTier[] = [
  {
    tier: "Platinum",
    style: { color: "platinum", textShadow: "0px 0px 5px #fff" },
    sponsors: [
      {
        name: "Amazon",
        imgsrc: "/sponsors/amazon.png",
      },
      {
        name: "Snap AR",
        imgsrc: "/sponsors/snapar.png",
      },
      {
        name: "Meta",
        imgsrc: "/sponsors/meta.png",
      },
      {
        name: "Ramen VR",
        imgsrc: "/sponsors/ramenvr.png",
      },
      {
        name: "AWE",
        imgsrc: "/sponsors/awe.svg",
      },
    ],
  },
  {
    tier: "Gold",
    style: { color: "gold" },
    sponsors: [
      {
        name: "Mark III",
        imgsrc: "/sponsors/markiii.png",
      },
      {
        name: "ShapesXR",
        imgsrc: "/sponsors/shapesxr.svg",
      },
      {
        name: "NVIDIA",
        imgsrc: "/sponsors/nvidia.png",
      },
      {
        name: "Gabb",
        imgsrc: "/sponsors/gabb.png",
      },
    ],
  },
  {
    tier: "Silver",
    style: { color: "silver" },
    sponsors: [
      {
        name: "Niantic",
        imgsrc: "/sponsors/niantic.png",
      },

      {
        name: "Immersal",
        imgsrc: "/sponsors/immersal.png",
      },
      {
        name: "Membit",
        imgsrc: "/sponsors/membit.png",
      },
      {
        name: "Shake Shack",
        imgsrc: "/sponsors/shakeshack.png",
      },
    ],
  },
];
