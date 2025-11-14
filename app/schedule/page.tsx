import { Metadata } from "next";
import { schedule } from "./schedule";
import { ScheduleItem } from "../types";
import { Menu } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule | Immerse the Bay | Stanford",
  description: "Immerse the Bay, Stanford University's leading XR hackathon",
};

export default function Home() {
  const days = [...new Set(schedule.map((item) => item.day))];

  return (
    <main id="main">
      <div className="w-[screen] bg-immersive py-[140px] flex flex-col justify-center items-center">
        <div className={`text-white font-semibold font-orbitron text-3xl mb-6`}>
          Schedule
        </div>
        <div className={`w-[85%] mx-10 h-full`}>
          
          {days.map((day) => {
            const items = schedule.filter((item) => item.day === day);
            const isFriday = day.includes("Friday");

            return (
              <div key={day}>
                {/* Title */}
                <div className="text-white font-orbitron text-3xl mt-[70px]">
                  {day}
                </div>
                <hr className="shadow-glowing my-1 mb-4" />

                {/* NON-FRIDAY: normal single column */}
                {!isFriday && (
                  <div className="text-white font-ptsans text-xl">
                    {items.map((item, index) => (
                      <div key={index} className="mt-6">
                        <div className="flex justify-between border-b border-white border-opacity-25">
                          <span className="font-semibold">{item.time}</span>
                          <span>{item.location}</span>
                        </div>
                        {item.description}
                      </div>
                    ))}
                  </div>
                )}

                {/* FRIDAY SPECIAL FORMAT */}
                {isFriday && (
                  <div className="text-white font-ptsans text-xl">

                    {/* 1️⃣ First Friday event (before workshops) */}
                    <div className="mt-6">
                      <div className="flex justify-between border-b border-white border-opacity-25">
                        <span className="font-semibold">{items[0].time}</span>
                        <span>{items[0].location}</span>
                      </div>
                      {items[0].description}
                    </div>

                    {/* WORKSHOPS TITLE */}
                    <div className="text-white font-orbitron text-2xl mt-10">
                      Workshops
                    </div>

                    <hr className="mb-6 border-white border-opacity-40" />

                    {/* 3-column aligned workshop grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr_1fr] gap-10 mt-4 text-white font-ptsans text-xl">

                      {/* Row 1 */}
                      <div className="font-semibold text-lg">12:00 – 1:00 pm</div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Beat Saber</span>
                          <a
                            href="https://www.google.com/maps/d/edit?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base underline opacity-90 hover:opacity-100 transition"
                          >
                            Rotunda E241
                          </a>
                        </div>
                        <hr className="border-white border-opacity-25 my-1" />

                        <div className="relative w-fit">
                          <span className="cursor-pointer group flex items-center gap-2">
                            Mods, Maps, and Mastery
                            <Menu className="w-4 h-4 flex-shrink-0" />

                            {/* Tooltip */}
                            <div className="absolute left-0 mt-2 w-[450px] max-w-[80vw] p-4 rounded-lg bg-black/90 text-white text-sm 
                        opacity-0 group-hover:opacity-100 transition duration-200 z-50 pointer-events-none">
                              Description: Come find out!
                            </div>
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">XR @ Berkeley</span>
                          <a
                            href="https://www.google.com/maps/d/edit?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base underline opacity-90 hover:opacity-100 transition"
                          >
                            Packard 101
                          </a>
                        </div>
                        <hr className="border-white border-opacity-25 my-1" />

                        <div className="relative w-fit">
                          <span className="cursor-pointer group flex items-center gap-2">
                            Introduction to Unity
                            <Menu className="w-4 h-4 flex-shrink-0" />

                            <div className="absolute left-0 mt-2 w-[450px] max-w-[80vw] p-4 rounded-lg bg-black/90 text-white text-sm 
                        opacity-0 group-hover:opacity-100 transition duration-200 z-50 pointer-events-none">
                              Description: This workshop will cover the basics of the Unity game engine and have a live demonstration on how to navigate the Unity editor. If you're new to AR/VR development, this overview can serve as a foundation for using other XR development tools in this event! Hope to see you there!
                            </div>
                          </span>
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="font-semibold text-lg">1:15 – 2:15 pm</div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">XREAL</span>
                          <a
                            href="https://www.google.com/maps/d/edit?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base underline opacity-90 hover:opacity-100 transition"
                          >
                            Rotunda E241
                          </a>
                        </div>
                        <hr className="border-white border-opacity-25 my-1" />

                        <div className="relative w-fit">
                          <span className="cursor-pointer group flex items-center gap-2">
                            Building the AR Future
                            <Menu className="w-4 h-4 flex-shrink-0" />

                            <div className="absolute left-0 mt-2 w-[450px] max-w-[80vw] p-4 rounded-lg bg-black/90 text-white text-sm 
                        opacity-0 group-hover:opacity-100 transition duration-200 z-50 pointer-events-none">
                              Discover how XREAL is shaping the future of augmented reality through accessible hardware and our SDK that empowers developers to create spatial experiences for everyone.
                            </div>
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Snap AR</span>
                          <a
                            href="https://www.google.com/maps/d/edit?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base underline opacity-90 hover:opacity-100 transition"
                          >
                            Packard 101
                          </a>
                        </div>
                        <hr className="border-white border-opacity-25 my-1" />

                        <div className="relative w-fit">
                          <span className="cursor-pointer group flex items-center gap-2">
                            Develop with Snap Spectacles
                            <Menu className="w-4 h-4 flex-shrink-0" />

                            <div className="absolute left-0 mt-2 w-[450px] max-w-[80vw] p-4 rounded-lg bg-black/90 text-white text-sm 
                        opacity-0 group-hover:opacity-100 transition duration-200 z-50 pointer-events-none">
                              Description: Are you interested in developing AR, real-world applications? Or are you interested in learning more about Snap Spectacles? Come to this workshop to learn about the ecosystem behind Snap Spectacles and how to develop with them! By the end of it, you'll gain a better understanding of AR glasses and have a starter project set up that you can use for your hack! We will also provide mentorship throughout the hack if you choose to build with us!
                            </div>
                          </span>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="font-semibold text-lg">2:30 – 3:30 pm</div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">ByteDance</span>
                          <a
                            href="https://www.google.com/maps/d/edit?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base underline opacity-90 hover:opacity-100 transition"
                          >
                            NVIDIA Auditorium
                          </a>
                        </div>
                        <hr className="border-white border-opacity-25 my-1" />

                        <div className="relative w-fit">
                          <span className="cursor-pointer group flex items-center gap-2">
                            Build for PICO XR, SecureMR, or Apple Vision Pro with WebSpatial
                            <Menu className="w-4 h-4 flex-shrink-0" />

                            <div className="absolute left-0 mt-2 w-[450px] max-w-[80vw] p-4 rounded-lg bg-black/90 text-white text-sm 
                        opacity-0 group-hover:opacity-100 transition duration-200 z-50 pointer-events-none">
                              Description: Learn how to build for Apple Vision Pro, Android XR, and PICO headsets — using just HTML, React, CSS, and JavaScript. With **WebSpatial**, you can turn any 2D website into a spatial app in hours, not days. Build interactive travel planners, spatial productivity tools, 3D portfolios, or even immersive media dashboards — all with code you already know.<br /><br />
                              We’ll also cover **SecureMR**, our mixed reality framework that lets you bring your own Computer Vision and ML models into Unity-powered XR apps. Think gesture-controlled interfaces, AI-driven fitness apps, smart home overlays, or spatial educational tools that respond to real-world objects.
                            </div>
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Raven</span>
                          <a
                            href="https://www.google.com/maps/d/edit?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base underline opacity-90 hover:opacity-100 transition"
                          >
                            Packard 101
                          </a>
                        </div>
                        <hr className="border-white border-opacity-25 my-1" />

                        <div className="relative w-fit">
                          <span className="cursor-pointer group flex items-center gap-2">
                            Raven AR Glasses: Intro + SDK Preview
                            <Menu className="w-4 h-4 flex-shrink-0" />

                            <div className="absolute left-0 mt-2 w-[450px] max-w-[80vw] p-4 rounded-lg bg-black/90 text-white text-sm 
                        opacity-0 group-hover:opacity-100 transition duration-200 z-50 pointer-events-none">
                              Description: Raven Resonance founding team members preview their smart glasses with eye tracking, full-color display, Linux-based OS, and hot-swappable batteries. Plus a sneak peek of the Raven SDK for creating apps & agents that utilize the powerful on-glasses compute and sensors.
                            </div>
                          </span>
                        </div>
                      </div>

                      {/* Row 4 */}
                      <div className="font-semibold text-lg">3:45 – 4:45 pm</div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">OpenBCI</span>
                          <a
                            href="https://www.google.com/maps/d/edit?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base underline opacity-90 hover:opacity-100 transition"
                          >
                            NVIDIA Auditorium
                          </a>
                        </div>
                        <hr className="border-white border-opacity-25 my-1" />

                        <div className="relative w-fit">
                          <span className="cursor-pointer group flex items-center gap-2">
                            Introduction to Brain Computer Interfaces
                            <Menu className="w-4 h-4 flex-shrink-0" />

                            <div className="absolute left-0 mt-2 w-[450px] max-w-[80vw] p-4 rounded-lg bg-black/90 text-white text-sm 
                        opacity-0 group-hover:opacity-100 transition duration-200 z-50 pointer-events-none">
                              Description: An overview of OpenBCI and its hardware. Including a live Galea demo!
                            </div>
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Meshy AI</span>
                          <a
                            href="https://www.google.com/maps/d/edit?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base underline opacity-90 hover:opacity-100 transition"
                          >
                            Packard 101
                          </a>
                        </div>
                        <hr className="border-white border-opacity-25 my-1" />

                        <div className="relative w-fit">
                          <span className="cursor-pointer group flex items-center gap-2">
                            Empowering Creativity: How Meshy Facilitates 3D Asset Creation with AI in XR-Hacks
                            <Menu className="w-4 h-4 flex-shrink-0" />

                            <div className="absolute left-0 mt-2 w-[450px] max-w-[80vw] p-4 rounded-lg bg-black/90 text-white text-sm 
                        opacity-0 group-hover:opacity-100 transition duration-200 z-50 pointer-events-none">
                              Description: Join us for an interactive workshop with Meshy, the leading GenAI platform revolutionizing 3D content creation. Meshy empowers artists, designers, and developers to generate fully textured 3D models from text or images in just minutes, drastically reducing the traditional modeling process from hours to seconds.<br /><br />
                              In this session, the Meshy team will walk through the complete Meshy workflow — from text-to-3D generation to texture refinement. You’ll see how creators and studios are integrating Meshy into their pipelines for rapid prototyping, game development, XR experiences, and virtual production. Whether you’re a designer, developer, or researcher, you’ll gain practical insights into how generative AI is transforming 3D creation workflows — and how Meshy can accelerate your own creative process.
                            </div>
                          </span>
                        </div>
                      </div>

                      {/* Row 5 */}
                      <div className="font-semibold text-lg">5:00 – 6:00 pm</div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">XR Bootcamp / Meta</span>
                          <a
                            href="https://www.google.com/maps/d/edit?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base underline opacity-90 hover:opacity-100 transition"
                          >
                            NVIDIA Auditorium
                          </a>
                        </div>
                        <hr className="border-white border-opacity-25 my-1" />

                        <div className="relative w-fit">
                          <span className="cursor-pointer group flex items-center gap-2">
                            Start in XR Today: Ideation, Prototyping & Social VR
                            <Menu className="w-4 h-4 flex-shrink-0" />

                            <div className="absolute left-0 mt-2 w-[450px] max-w-[80vw] p-4 rounded-lg bg-black/90 text-white text-sm 
                        opacity-0 group-hover:opacity-100 transition duration-200 z-50 pointer-events-none">
                              Description: XR in 2025: A quick overview of the current XR ecosystem and why this is the best time to enter.
                            </div>
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Afference</span>
                          <a
                            href="https://www.google.com/maps/d/edit?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base underline opacity-90 hover:opacity-100 transition"
                          >
                            Packard 101
                          </a>
                        </div>
                        <hr className="border-white border-opacity-25 my-1" />

                        <div className="relative w-fit">
                          <span className="cursor-pointer group flex items-center gap-2">
                            Artificial Touch: How To Let People Feel Virtual Objects
                            <Menu className="w-4 h-4 flex-shrink-0" />

                            <div className="absolute left-0 mt-2 w-[450px] max-w-[80vw] p-4 rounded-lg bg-black/90 text-white text-sm 
                        opacity-0 group-hover:opacity-100 transition duration-200 z-50 pointer-events-none">
                              Description: This workshop will expose you to the powerful work behind Afference that deepens digital experiences by adding the power of touch. Through our simple Unity SDK, you’ll learn how to provide users a more powerful and engaging experience by tapping into the most impactful human sense. Hosted by Afference engineers and product leads, you’ll get a solid picture of the opportunity ahead of you to integrate Artificial Touch during the hackathon and beyond, as the technology is launched to consumers through the smart wearables you know and love today in the near future.
                            </div>
                          </span>
                        </div>
                      </div>

                    </div>


                    {/* 3️⃣ Remaining Friday items */}
                    {items.slice(1).map((item, index) => (
                      <div key={index} className="mt-6">
                        <div className="flex justify-between border-b border-white border-opacity-25">
                          <span className="font-semibold">{item.time}</span>
                          <span>{item.location}</span>
                        </div>
                        {item.description}
                      </div>
                    ))}

                  </div>
                )}
              </div>
            );
          })}



          {/* Column format without workshop column. */}
          {/* {days.map((day) => (
            <div key={day}>
              <div className={`text-white font-orbitron text-3xl mt-[70px]`}>
                {day}
              </div>
              <hr className={`shadow-glowing my-1 mb-4`}></hr>
              <div className={`text-white font-ptsans text-xl`}>
                {schedule
                  .filter((item) => item.day === day)
                  .map((item: ScheduleItem, index: number) => (
                    <div key={index}>
                      <div className="flex flex-row justify-between border-b border-white border-opacity-25 mt-4">
                        <span className={`font-semibold`}>{item.time}</span>
                        <span>{item.location}</span>
                      </div>
                      {item.description}
                      <br />
                    </div>
                  ))}
              </div>
            </div>
          ))} */}

        </div>
      </div>
      <div className="w-screen flex items-center justify-center mb-[150px]">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1hZjPNAJlb6pjj6Pv3k7QS266TOli61s&ehbc=2E312F&noprof=1"
          className="w-full h-[500px] p-[20px] max-w-[800px]"
        ></iframe>
      </div>
    </main>
  );
}
