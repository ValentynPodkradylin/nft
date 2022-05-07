import { StaticImageData } from "next/image";
import img1 from "./../../../images/showcase/1.jpg";
import img2 from "./../../../images/showcase/2.jpg";
import img3 from "./../../../images/showcase/3.jpg";
import img4 from "./../../../images/showcase/4.jpg";
import img5 from "./../../../images/showcase/5.jpg";
import img6 from "./../../../images/showcase/6.jpg";
import img7 from "./../../../images/showcase/7.jpg";
import img8 from "./../../../images/showcase/8.jpg";
import img9 from "./../../../images/showcase/9.jpg";
import img10 from "./../../../images/showcase/10.jpg";

export type Tiers = "lil boi" | "half boi" | "big boi";

export type NftImage = { img: StaticImageData; tiers: Tiers };

export const imgs: NftImage[] = [
  {
    img: img1,
    tiers: "big boi",
  },
  {
    img: img2,
    tiers: "lil boi",
  },
  {
    img: img3,
    tiers: "half boi",
  },
  {
    img: img4,
    tiers: "lil boi",
  },
  {
    img: img6,
    tiers: "lil boi",
  },
  {
    img: img7,
    tiers: "half boi",
  },
  {
    img: img8,
    tiers: "big boi",
  },
  {
    img: img9,
    tiers: "half boi",
  },
  {
    img: img5,
    tiers: "big boi",
  },
  {
    img: img10,
    tiers: "lil boi",
  },
];
