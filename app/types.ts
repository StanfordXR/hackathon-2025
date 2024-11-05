import { CSSProperties } from "react";

export interface Sponsor {
  name: string;
  imgsrc: string;
}

export interface SponsorTier {
  tier: string;
  style: CSSProperties;
  sponsors: Sponsor[];
}
