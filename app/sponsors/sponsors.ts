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
		sponsors: [
			{ name: "ByteDance", imgsrc: "/sponsors/ByteDance.png" },
			{ name: "OpenBCI", imgsrc: "/sponsors/OpenBCI.png" },
		],
	},
	{
		tier: "Gold",
		style: { color: "gold" },
		sponsors: [
			{ name: "AWE", imgsrc: "/sponsors/awe.svg" },
		],
	},
	{
		tier: "Silver",
		style: { color: "silver" },
			sponsors: [
				{ name: "Raven Resonance", imgsrc: "/sponsors/Raven.png" },
				{ name: "Afference", imgsrc: "/sponsors/Afference.png" },
				{ name: "XREAL", imgsrc: "/sponsors/XREAL.png" },
				{ name: "Meshy AI", imgsrc: "/sponsors/Meshy.png" },
				{ name: "Shapes XR", imgsrc: "/sponsors/shapesxr.svg" },
			],
	},
];
