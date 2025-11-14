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
			{ name: "XR Bootcamp by Meta", imgsrc: "/sponsors/XRMeta.png", size: 250},
			// { name: "Meta", imgsrc: "/sponsors/meta.png" },
			// { name: "XR Bootcamp", imgsrc: "/sponsors/XR_Bootcamp.png", size: 160 },
			// { name: "Snap AR", imgsrc: "/sponsors/SnapAR.png" },
		],
	},
	{
		tier: "Gold",
		style: { color: "gold" },
		sponsors: [
			{ name: "Raven Resonance", imgsrc: "/sponsors/Raven.png", size: 91 },
			{ name: "Afference", imgsrc: "/sponsors/Afference.png", size: 91 },
			{ name: "XREAL", imgsrc: "/sponsors/XREAL.png", size: 91 },
			{ name: "Meshy AI", imgsrc: "/sponsors/Meshy.png", size: 110 },
		],
	},
	{
		tier: "Silver",
		style: { color: "silver" },
		sponsors: [
			{ name: "Shapes XR", imgsrc: "/sponsors/shapesxr.svg" },
			{ name: "Snap AR", imgsrc: "/sponsors/Snap_AR.png", size: 170 },
			{ name: "CVRE", imgsrc: "/sponsors/CVRE.png", size: 160 },
		],
	},

	{
		tier: "Supported By",
		style: { color: "#3455A5" },
		sponsors: [
			{ name: "Red Bull", imgsrc: "/sponsors/Redbull.png", size: 300 },
			{ name: "Shake Shack", imgsrc: "/sponsors/shakeshack.png", size: 150 },
			{ name: "Panda Express", imgsrc: "/sponsors/Panda.png", size: 260 },
			{ name: "Insomnia", imgsrc: "/sponsors/Insomnia.png", size: 270 },
			{ name: "Ike's Love and Sandwiches", imgsrc: "/sponsors/Ike.png", size: 450 },
		],
	},
];
