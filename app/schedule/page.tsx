import { Metadata } from "next";
import { schedule } from "./schedule";
import { ScheduleItem } from "../types";

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
        <div className={`w-[80%] mx-10 h-full`}>
          
          {days.map((day) => {
            const items = schedule.filter((item) => item.day === day);
            const isFriday = day.includes("Friday");

            return (
              <div key={day}>

                {/* FRIDAY: Title + Workshops Title on same line */}
                {isFriday ? (
                  <div className="flex justify-between items-center mt-[70px]">
                    <div className="text-white font-orbitron text-3xl">
                      {day}
                    </div>

                    <div className="text-white font-orbitron text-3xl">
                      Workshops
                    </div>
                  </div>
                ) : (
                  /* SATURDAY/SUNDAY titles unchanged */
                  <div className="text-white font-orbitron text-3xl mt-[70px]">
                    {day}
                  </div>
                )}

                <hr className="shadow-glowing my-1 mb-4" />

                {/* FRIDAY SPECIAL LAYOUT */}
                {isFriday ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white font-ptsans text-xl">

                    {/* LEFT COLUMN: Friday Schedule */}
                    <div className="space-y-4">
                      {items.map((item, index) => (
                        <div key={index}>
                          <div className="flex flex-row justify-between border-b border-white border-opacity-25">
                            <span className="font-semibold">{item.time}</span>
                            <span>{item.location}</span>
                          </div>
                          {item.description}
                        </div>
                      ))}
                    </div>

                    {/* RIGHT COLUMN: Friday Workshops */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between border-b border-white border-opacity-25">
                          <span className="font-semibold">12:00 pm – 1:00 pm</span>
                          <span>NVIDIA Auditorium | Packard 101</span>
                        </div>
                        XR @ Berkeley | Beatsaber
                      </div>

                      <div>
                        <div className="flex justify-between border-b border-white border-opacity-25">
                          <span className="font-semibold">1:15 pm – 2:15 pm</span>
                          <span>NVIDIA Auditorium | Packard 101</span>
                        </div>
                        XREAL | Dev on Lens Studio
                      </div>

                      <div>
                        <div className="flex justify-between border-b border-white border-opacity-25">
                          <span className="font-semibold">2:30 pm – 3:30 pm</span>
                          <span>NVIDIA Auditorium | Packard 101</span>
                        </div>
                        ByteDance | Raven
                      </div>

                      <div>
                        <div className="flex justify-between border-b border-white border-opacity-25">
                          <span className="font-semibold">3:45 pm – 4:45 pm</span>
                          <span>NVIDIA Auditorium | Packard 101</span>
                        </div>
                        OpenBCI | Meshy.AI
                      </div>

                      <div>
                        <div className="flex justify-between border-b border-white border-opacity-25">
                          <span className="font-semibold">5:00 pm – 6:00 pm</span>
                          <span>NVIDIA Auditorium | Packard 101</span>
                        </div>
                        Meta/XR Bootcamp | Afference
                      </div>
                    </div>

                  </div>
                ) : (
                  /* SAT/SUN: Normal full-width column */
                  <div className="text-white font-ptsans text-xl">
                    {items.map((item, index) => (
                      <div key={index} className="mt-4">
                        <div className="flex flex-row justify-between border-b border-white border-opacity-25">
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


          /* Column format without workshop column. */
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
