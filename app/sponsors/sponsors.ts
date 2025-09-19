import { SponsorTier } from "../types";

// Sponsor tiers are retained with their display styles. Each tier's
// `sponsors` array is currently empty — add sponsor objects to populate them.
// Example sponsor object: { 
//                          name: "Company",
//                          imgsrc: "/sponsors/company.png" 
//                         }

export const sponsors: SponsorTier[] = [
	{
		tier: "Platinum",
		style: { color: "platinum", textShadow: "0px 0px 5px #fff" },
		sponsors: [],
	},
	{
		tier: "Gold",
		style: { color: "gold" },
		sponsors: [],
	},
	{
		tier: "Silver",
		style: { color: "silver" },
		sponsors: [],
	},
];
