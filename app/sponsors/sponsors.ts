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
			{ name: "AWE", imgsrc: "/sponsors/awe.svg", size: 150 },
			{ name: "ByteDance", imgsrc: "/sponsors/ByteDance.png", size: 105 },
			{ name: "OpenBCI", imgsrc: "/sponsors/OpenBCI.png", size: 130 },
			{ name: "Meta", imgsrc: "/sponsors/meta.png" },
			{ name: "XR Bootcamp", imgsrc: "/sponsors/XR_Bootcamp.png", size: 160 },
			// { name: "Snap AR", imgsrc: "/sponsors/SnapAR.png" },
		],
	},
	{
		tier: "Gold",
		style: { color: "gold" },
		sponsors: [
			{ name: "Raven Resonance", imgsrc: "/sponsors/Raven.png" },
			{ name: "Afference", imgsrc: "/sponsors/Afference.png" },
			{ name: "XREAL", imgsrc: "/sponsors/XREAL.png" },
			{ name: "Meshy AI", imgsrc: "/sponsors/Meshy.png", size: 115 },
		],
	},
	{
		tier: "Silver",
		style: { color: "silver" },
		sponsors: [
			{ name: "Shapes XR", imgsrc: "/sponsors/shapesxr.svg" },
		],
	},
];
