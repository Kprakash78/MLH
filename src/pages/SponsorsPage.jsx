import React from "react";
import headingImg from "../assets/images/Heading 2.png";
import { SPONSORS_CONFIG } from "../data/sponsorsData.js";

/**
 * SponsorsPage Component
 * Renders the exact neo-brutalist sponsor showcase using semantic list items.
 */
export default function SponsorsPage({ tiers = SPONSORS_CONFIG }) {
  return (
    <section className="box-border flex min-h-screen w-full flex-col items-center justify-center bg-[#37534c] px-12 py-10 pb-15 font-['Plus_Jakarta_Sans',-apple-system,BlinkMacSystemFont,sans-serif] text-white max-[900px]:px-5 max-[900px]:py-9">
      <div className="mx-auto flex w-full max-w-340 flex-col gap-9">
        {/* Header Row */}
        <header className="relative flex w-full items-start justify-between gap-6 max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-4 max-[900px]:text-center">
          <div data-reveal="left" className="flex flex-1 justify-center">
            <img
              src={headingImg}
              alt="BACKED BY BUILDERS."
              className="block h-auto w-full max-w-155"
            />
          </div>

          <div className="flex shrink-0 flex-col items-start gap-1 text-left text-[13.5px] leading-[1.35] text-[#d5dedc] max-[900px]:items-center">
            <span>Grateful to our sponsors supporting</span>
            <span>Hacktoberfest 2026.</span>
            <div className="mt-0.5 h-1 w-10 bg-[#ff1e1e]" />
          </div>
        </header>

        {/* Sponsor Tier List (ul > li) */}
        <ul className="m-0 flex w-full list-none flex-col gap-8 p-0">
          {tiers.map((tier) => {
            const hasSponsors = tier.sponsors && tier.sponsors.length > 0;
            const isSingleLogo = tier.sponsors?.length === 1;

            const tierStyles = {
              gold: {
                shadow: "shadow-[9px_9px_0px_#ffd000]",
                badge: "bg-[#d2a134]",
              },
              silver: {
                shadow: "shadow-[9px_9px_0px_#c5cbd3]",
                badge: "bg-[#b0b3b8]",
              },
              bronze: {
                shadow: "shadow-[9px_9px_0px_#cb7b2c]",
                badge: "bg-[#cb7b2c]",
              },
            };

            const styles = tierStyles[tier.id] || tierStyles.gold;

            return (
              <li
                key={tier.id}
                data-reveal
                className={`interactive-lift relative box-border flex h-43.75 min-h-43.75 rounded-xs bg-white ${styles.shadow} max-[900px]:h-auto max-[900px]:min-h-0 max-[900px]:flex-col`}
              >
                {/* Left Column: Tier Info */}
                <div className="relative box-border flex w-65 shrink-0 flex-col items-start justify-center px-7 py-6 after:absolute after:top-4.5 after:right-0 after:bottom-4.5 after:w-px after:bg-black after:content-[''] max-[900px]:w-full max-[900px]:items-center max-[900px]:px-5 max-[900px]:py-4.5 max-[900px]:text-center max-[900px]:after:top-auto max-[900px]:after:right-5 max-[900px]:after:bottom-0 max-[900px]:after:left-5 max-[900px]:after:h-px max-[900px]:after:w-auto">
                  <span
                    className={`inline-block px-3 py-1 text-[13px] font-black uppercase tracking-wider text-black ${styles.badge}`}
                  >
                    {tier.tierLabel}
                  </span>

                  <div className="my-2 h-[4.5px] w-9.5 bg-[#ff1e1e] mb-2.5" />

                  <p className="m-0 whitespace-pre-line text-left text-[13px] font-black leading-[1.3] tracking-[0.02em] text-black max-[900px]:text-center">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Right Column: Sponsor Logos */}
                <div
                  className={`box-border flex flex-1 items-center gap-5 px-9 py-5 max-[900px]:flex-wrap max-[900px]:justify-center max-[900px]:px-5 ${isSingleLogo ? "justify-center" : ""}`}
                >
                  {hasSponsors &&
                    tier.sponsors.map((sponsor) => (
                      <SponsorLogoItem
                        key={sponsor.id || sponsor.name}
                        sponsor={sponsor}
                      />
                    ))}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <footer className="mt-4 flex w-full justify-start max-[900px]:justify-center">
          <button
            className="box-border inline-flex min-w-85 select-none items-center justify-center border-[2.5px] border-black bg-[#ff4343] px-16 py-4 font-['JetBrains_Mono',monospace] text-base font-extrabold text-black shadow-[6px_6px_0px_#000] transition-all duration-150 ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ff5c5c] hover:shadow-[8px_8px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000] max-[900px]:w-full max-[900px]:min-w-full"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Explore all Sponsors
          </button>
        </footer>
      </div>
    </section>
  );
}

/**
 * SponsorLogoItem Helper Component
 */
function SponsorLogoItem({ sponsor }) {
  const logoContent = (
    <img
      src={sponsor.logo}
      alt={sponsor.name}
      className="max-w-full object-contain transition-transform duration-200 ease-in-out hover:scale-[1.04]"
      style={{ height: sponsor.logoHeight || "42px" }}
    />
  );

  if (!sponsor.website) {
    return (
      <div className="inline-flex items-center no-underline">{logoContent}</div>
    );
  }

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center no-underline"
      title={sponsor.name}
    >
      {logoContent}
    </a>
  );
}
