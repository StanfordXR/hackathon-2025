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
          {days.map((day) => (
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
          ))}
        </div>
      </div>
      <div className="w-screen flex items-center justify-center mb-[150px]">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=10q6-VYeUuNuB194LLNJciYC0aJtaV10&ehbc=2E312F"
          className="w-full h-[500px] p-[20px] max-w-[800px]"
        ></iframe>
      </div>
    </main>
  );
}
