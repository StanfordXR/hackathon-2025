import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Redirect | Immerse the Bay | Stanford",
  description: "Team formation redirect",
};

export default async function Home() {
  redirect(
    "https://stanfordxr.notion.site/1354d325f17580cf9754e2765e0ef981?pvs=105"
  );
  return (
    <main id="main">
      <div className="w-[screen] h-screen bg-immersive pt-[140px] flex flex-col justify-center items-center">
        <div className={`text-white font-semibold font-orbitron text-3xl`}>
          Redirecting...
        </div>
      </div>
    </main>
  );
}
