import headingImg from "../assets/images/Group 2.png";
import tagImg from "../assets/images/Group 3.png";
import { MENTORS_CONFIG } from "../data/mentorsData.js";

/**
 * MentorsPage Component
 * Displays the mentors showcase with a continuous horizontal auto-scrolling carousel.
 */
export default function MentorsPage({ mentors = MENTORS_CONFIG }) {
  // Duplicate array to enable a seamless infinite marquee loop
  const displayMentors = [...mentors, ...mentors];

  return (
    <section className="box-border flex h-screen w-full flex-col items-center justify-center overflow-hidden border-t-4 border-[#231F20] bg-[#F2F2EB] px-10 py-6 pb-7 font-['Barlow_Semi_Condensed','Plus_Jakarta_Sans',sans-serif] text-black max-[1024px]:h-auto max-[1024px]:min-h-screen max-[1024px]:gap-5 max-[1024px]:px-6 max-[1024px]:py-9 max-[768px]:overflow-y-visible max-[768px]:px-4 max-[768px]:pt-8 max-[768px]:pb-10">
      <div className="mx-auto flex h-full max-h-235 w-full max-w-325 flex-col justify-between gap-4 max-[1024px]:h-auto max-[1024px]:max-h-none max-[1024px]:gap-5 max-[1024px]:p-0">
        {/* Section Header */}
        <header className="flex w-full shrink-0 flex-col items-start gap-3.5">
          <img
            src={headingImg}
            alt="MEET THE MENTORS & JUDGES."
            className="block h-auto w-full max-w-145 max-[768px]:max-w-full"
          />
          <img
            src={tagImg}
            alt="GUIDE . REVIEW . SUPPORT"
            className="block h-auto w-full max-w-85 cursor-pointer transition-[transform,filter] duration-200 ease-in-out hover:-translate-y-0.75 hover:scale-[1.03] hover:drop-shadow-[0_8px_18px_rgba(244,63,94,0.45)] active:translate-y-px active:scale-[0.98] max-[768px]:max-w-65"
          />
        </header>

        {/* Mentors Carousel Track */}
        <div className="relative flex min-h-0 w-full flex-1 items-center overflow-hidden box-border py-4 pb-6 max-[1024px]:h-auto max-[1024px]:min-h-110 max-[1024px]:flex-none max-[1024px]:py-3 max-[1024px]:pb-4.5 max-[768px]:min-h-90 max-[768px]:py-2.5 max-[768px]:pb-4">
          <ul className="flex w-max list-none items-center gap-10 m-0 p-0 animate-[mentorsScroll_24s_linear_infinite] will-change-transform hover:[animation-play-state:paused] max-[1024px]:gap-7 max-[768px]:gap-4.5">
            {displayMentors.map((mentor, index) => (
              <li
                key={`${mentor.id}-${index}`}
                className="box-border flex h-120 min-h-110 max-h-125 w-71.25 shrink-0 cursor-pointer select-none flex-col overflow-hidden rounded-xs border-[1.5px] border-black bg-[#FFCC00] p-2.5 pb-3.5 shadow-[0px_10.651px_6.39058px_rgba(163,102,26,0.12),14.9113px_12.7812px_26.6274px_rgba(184,107,224,0.25),-12.7812px_9.58587px_23.4321px_rgba(255,163,46,0.32)] transition-[transform,box-shadow] duration-250 ease-in-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0px_14px_10px_rgba(163,102,26,0.18),18px_16px_32px_rgba(184,107,224,0.35),-15px_12px_28px_rgba(255,163,46,0.45)] max-[1024px]:h-107.5 max-[1024px]:min-h-107.5 max-[1024px]:max-h-none max-[1024px]:w-65 max-[768px]:h-87.5 max-[768px]:min-h-87.5 max-[768px]:max-h-87.5 max-[768px]:w-55 max-[768px]:p-2 max-[768px]:pb-2.5"
              >
                <div className="box-border flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden rounded-xs border-[1.5px] border-black bg-black max-[768px]:h-67.5 max-[768px]:min-h-67.5 max-[768px]:flex-none">
                  {mentor.avatar ? (
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="block h-full w-full object-cover"
                      style={{
                        objectPosition:
                          mentor.objectPosition || "center center",
                      }}
                    />
                  ) : (
                    <div className="h-full w-full bg-[#FFCC00]" />
                  )}
                </div>

                <div className="box-border flex w-full flex-col items-start px-0.5 pt-3 pb-0.5 max-[768px]:pt-2">
                  <h3 className="m-0 w-full overflow-hidden text-ellipsis whitespace-nowrap text-left font-['Barlow_Semi_Condensed',sans-serif] text-[20px] font-extrabold uppercase leading-[1.15] tracking-[-0.5px] text-black max-[768px]:text-[17px]">
                    {mentor.name}
                  </h3>
                  <p className="mt-0.75 mb-0 w-full overflow-hidden text-ellipsis whitespace-nowrap text-left font-['Barlow_Semi_Condensed',sans-serif] text-[13.5px] font-bold uppercase leading-[1.2] tracking-[-0.2px] text-[#231F20] opacity-[0.85] max-[768px]:text-xs">
                    {mentor.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Box and Action Button */}
        <footer className="flex w-full shrink-0 flex-nowrap items-center justify-between gap-7 max-[768px]:flex-none max-[768px]:flex-col max-[768px]:items-stretch max-[768px]:gap-3.5">
          <div className="box-border flex max-w-190 flex-[1_1_auto] items-center rounded-xs border border-black bg-[#FFCC00] px-5 py-3 shadow-[0px_10px_6px_rgba(163,102,26,0.12),14px_12px_25px_rgba(184,107,224,0.25),-12px_9px_22px_rgba(255,163,46,0.32)] max-[768px]:h-auto max-[768px]:min-h-0 max-[768px]:w-full max-[768px]:max-w-full max-[768px]:flex-none max-[768px]:px-4 max-[768px]:py-3.5">
            <p className="m-0 font-['Barlow_Semi_Condensed',sans-serif] text-base font-extrabold uppercase leading-5.5 tracking-[-0.5px] text-black max-[768px]:text-[13.5px] max-[768px]:leading-4.75">
              OUR MENTORS AND JUDGES ARE INDUSTRY PROFESSIONALS , RESEARCHERS ,
              AND EXPERIENCED DEVELOPERS WHO ARE HERE TO GUIDE YOU , ANSWER YOUR
              QUESTIONS AND EVALUATE THE PROJECTS
            </p>
          </div>

          <div className="flex shrink-0 justify-end max-[768px]:w-full max-[768px]:flex-none">
            <button
              className="box-border inline-flex h-15.5 min-w-95 select-none items-center justify-between border-2 border-black bg-[#FFD91A] px-7 font-['Barlow_Semi_Condensed',sans-serif] text-[19px] font-extrabold tracking-[-0.4px] text-black uppercase shadow-[8px_9px_3px_#000] transition-all duration-150 ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ffe033] hover:shadow-[10px_11px_3px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[4px_4px_2px_#000] max-[768px]:h-13 max-[768px]:w-full max-[768px]:min-w-full max-[768px]:px-4.5 max-[768px]:text-[15px]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span>VIEW ALL MENTORS AND JUDGES</span>
              <span className="inline-block text-[34px] font-black leading-[0.8] max-[768px]:text-[26px]">
                ↗
              </span>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
