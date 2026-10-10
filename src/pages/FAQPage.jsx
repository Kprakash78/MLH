import FAQItem from "../components/FAQItem";
import seeAllFaqs from "../assets/images/See all FAQs.png";

/* FAQ data */
const FAQ_DATA = [
  {
    question: "Who can participate?",
    answer:
      "Anyone interested in technology, coding, design, or open source is welcome to participate. Whether you're a beginner or an experienced developer, Hacktoberfest is an opportunity to learn, collaborate, and build something meaningful with a community of creators.",
  },
  {
    question: "What is the team size?",
    answer:
      "You can participate individually or collaborate with other builders to bring your ideas to life. Please check the official event guidelines for the permitted team size before registering.",
  },
  {
    question: "Is registration free?",
    answer:
      "Yes! Registration is completely free. Sign up between October 10 and October 18 to secure your spot. Registrations close on October 18, so make sure you register before the deadline.",
  },
  {
    question: "Can I participate individually?",
    answer:
      "Absolutely! You can participate solo if you prefer working independently. If you have friends with complementary skills, you can also collaborate as a team, subject to the event's team guidelines.",
  },
  {
    question: "What can I build with?",
    answer:
      "Build a creative solution using the technologies and tools best suited to your idea. You can explore web development, AI/ML, open-source tools, applications, and other relevant technologies. Your project should address a meaningful problem and demonstrate creativity, functionality, and technical effort.",
  },
  {
    question: "How are projects judged?",
    answer:
      "Projects will be evaluated by the judging panel based on criteria such as innovation, problem-solving, technical implementation, functionality, usability, and potential impact. Participants should be prepared to demonstrate their projects and explain their approach. Final judging criteria will be shared by the organizers.",
  },
];

/**
 * FAQSection — The full FAQ page section
 */
function FAQSection() {
  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="flex min-h-screen flex-col bg-[#37534c] px-4 pt-12 pb-14 min-[601px]:px-7 min-[601px]:pt-16 min-[601px]:pb-20 min-[901px]:px-12 min-[901px]:pt-24 min-[901px]:pb-28"
    >
      {/* Header */}
      <div className="mb-7.5 flex flex-col gap-5 min-[901px]:mb-30 min-[901px]:flex-row min-[901px]:items-end min-[901px]:justify-between min-[901px]:gap-10">
        {/* Title */}
        <div className="min-w-0 max-w-120 flex-none">
          <h1 className="m-0 whitespace-normal font-['Barlow_Semi_Condensed',sans-serif] text-[clamp(40px,11vw,64px)] leading-none tracking-[-0.027em] text-[#f4f1e8] uppercase [text-shadow:5px_11px_4px_rgba(0,0,0,0.25)] min-[601px]:text-[clamp(64px,8vw,140px)] min-[901px]:whitespace-nowrap min-[901px]:text-[140px] min-[901px]:tracking-[-3.84px]">
            Everything
            <br />
            else, <span className="text-[#ef4b42]">Answered.</span>
          </h1>
        </div>

        {/* Description */}
        <div className="flex min-w-0 max-w-full items-end min-[901px]:w-141.25 min-[901px]:flex-none min-[901px]:pl-20">
          <p className="m-0 font-['Barlow_Semi_Condensed',sans-serif] text-[clamp(20px,3.2vw,32px)] leading-[1.1] font-extrabold text-[#F4F3EB] uppercase [text-shadow:5px_11px_4px_rgba(0,0,0,0.25)] min-[901px]:text-[32px] min-[901px]:leading-8.75">
            Got questions? We&apos;ve got you covered. Here are answers to the
            most common questions about Hacktoberfest 2026. If you still need
            help, feel free to reach out to our team.
          </p>
        </div>
      </div>

      {/* Accordion list */}
      <div id="faq-list" className="overflow-visible rounded-none border-2 border-[#192221] shadow-[11px_11px_0_0_#802B24]">
        {FAQ_DATA.map((item) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>

      <a
        href="#faq-list"
        className="mt-10 self-end transition-transform duration-200 ease-out hover:-translate-y-1 min-[901px]:mt-14"
      >
        <img src={seeAllFaqs} alt="See all FAQs" className="h-auto w-44 min-[601px]:w-56" />
      </a>
    </section>
  );
}

export default FAQSection;
