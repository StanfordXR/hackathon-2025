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
          className={`text-white font-semibold font-orbitron md:text-3xl text-xl mb-6`}>
          Frequently asked questions
        </div>
        <div className={`w-[80%] mx-10 h-full`}>
          <hr className={`shadow-glowing my-1 mb-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            What is the latest I should arrive and the earliest I should leave?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            It is very important to arrive before the opening ceremony at 7pm on Friday, November 14. 
            In addition, you give yourself enough time to check-in at the front desk, socialize to 
            meet potential team members, and enjoy some dinner. 

            Our closing ceremony ends at 3pm on Sunday, November 16. This is where we announce our 
            winners, but if you absolutely have to leave earlier, judging ends at 12pm. 
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Can I bring my own hardware to hack on?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            All hardware equipment used must be provided by sponsors or consumer off-the-shelf 
            devices (no hardware modifications). All teams using devices not included in the above 
            category will only be eligible for the “Wild West” prize track. Final judgement on what 
            hardware is allowed in the general tracks will be provided by the Immerse the Bay organizers. 
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Can I come with a pre-determined hacking group?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            The spirit of our hackathon is the connections and community we cultivate through events like 
            this, so we highly encourage you to work with new people to make awesome projects! It is also 
            allowed to form teams with people that you know or have worked with in the past. 
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Is there anything else happening besides hacking?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            Yes! Other than the free food, we will also have “sidequests” that you can participate in 
            to take a break from the hacking. Campus tours from our students, field games, anime watch 
            parties, and card games are planned during the course of the hackathon, so come join us for 
            some fun :D
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Are hackers allowed to stay in the building overnight?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            Yes, hackers are allowed to stay in Huang Engineering Center overnight. However, please wear 
            your badge at all times so that we can identify you as a part of the hackathon. If you are 
            not wearing your badge, we may ask you to check-in again or leave the premises. 
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            What kind of food is offered? Will there be options for dietary needs/restrictions?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            We are looking to offer a variety of foods for each of the four meals during the hackathon. 
            While we will try our best to meet the dietary needs and restrictions of as many people as 
            possible, there is no guarantee we will always have food to fit your exact situation. This 
            is a free hackathon to all attendees, and we will try our best within our means to meet your 
            needs. Please note your dietary restrictions on the RSVP form so that we are aware of it ahead 
            of time. 
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
          <div className={`text-white font-orbitron text-xl`}>
            Will Immerse The Bay provide travel accommodations or reimbursements?
          </div>
          <div className={`text-white font-ptsans text-lg`}>
            Unfortunately, Immerse The Bay 2025 cannot cover travel accomodations. As we grow each year, our hope
            is to secure funds to provide a scholarship for under-resourced hackers in the future. 
          </div>
          <hr className={`shadow-glowing my-5`}></hr>
        </div>
      </div>
    </main>
  );
}
