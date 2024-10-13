import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Immerse the Bay | Stanford",
  description: "Immerse the Bay, Stanford University's leading XR hackathon",
};

export default function Home() {
  return (
    <main id="main">
      <div className="w-screen bg-immersive mb-[50px] pt-[140px] flex flex-col justify-center items-center">
        <div
          className={`text-white font-semibold font-orbitron md:text-3xl text-xl mb-6`}
        >
          Frequently asked questions
        </div>
        <div className={`w-[80%] mx-10 h-full`}>
          <hr className={`shadow-glowing my-1 mb-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Is there a team size limit?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            Yes, teams are limited to 4 people.
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Do I need any prior XR experience?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            No prior experience is necessary! This hackathon welcomes all skill
            levels. We will host "Intro to Unity," "Unity + VR," and "Unity +
            AR" workshops, in collaboration with our wonderful partners at
            Berkeley and Unity, on Friday, Nov 8th to help you get started.
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Where can I find a team?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            Immerse The Bay will host a team formation session on Friday, Nov
            8th for participants without teams. <br /> <br />
            You can also introduce yourself on our Immerse The Bay Discord,
            where we have a dedicated channel for project ideas and team
            formation. (All accepted applicants will receive an invite to the
            Discord.)
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Is it possible to work on a project we've already started for this
            hackathon?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            No, projects must begin from scratch at the start of the hackathon.
            To be eligible for prizes, all work should be completed during the
            event.
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Do you offer travel support?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            Unfortunately, we are unable to provide travel support.
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Will food and accommodations be provided?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            Most meals will be provided during the event, but not all.
            Participants are responsible for their own travel and accommodation
            arrangements.
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            What technology should I bring?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            We do not provide laptops, so it's strongly recommended that you
            bring your own. Each team will be supplied with an XR device if
            needed, and we will have additional specialized technology
            available. You are also welcome to bring your own XR devices!
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            How can I get involved in organizing the event?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            If you're interested in helping organize or volunteering during the
            hackathon, join our Discord at{" "}
            <a className={`underline underline-offset-1`} href="stanfordxr.org">
              stanfordxr.org
            </a>{" "}
            and reach out to the team!
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
        </div>
      </div>
    </main>
  );
}
