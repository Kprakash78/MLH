import defaultArt from "../assets/cta-art.webp";
import defaultQr from "../assets/qr.png";

/**
 * "Ready to build something unforgettable?" section.
 *
 * Optional props:
 *   qrSrc  - replace the QR image (defaults to ./assets/qr.png)
 *   artSrc - replace the illustration (defaults to ./assets/cta-art.webp)
 */
export default function RegisterCTA({
  qrSrc = defaultQr,
  artSrc = defaultArt,
}) {
  return (
    <section
      id="register"
      className="box-border bg-[#F2F2EB] px-5 py-10 font-['Inter',system-ui,sans-serif] text-black sm:px-10 sm:py-12 lg:px-[7vw] lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 min-[900px]:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] min-[900px]:gap-12">
        {/* Content */}
        <div data-reveal="left" className="min-w-0">
          {/* Color swatches */}
          <div className="mb-6 flex gap-3" aria-hidden="true">
            <span className="h-5.5 w-10 rounded-[3px] border-2 border-black bg-[#E53927]" />
            <span className="h-5.5 w-10 rounded-[3px] border-2 border-black bg-[#8BB2DE]" />
            <span className="h-5.5 w-10 rounded-[3px] border-2 border-black bg-[#F5B726]" />
            <span className="h-5.5 w-10 rounded-[3px] border-2 border-black bg-[#E97B77]" />
          </div>

          {/* Main heading */}
          <h2 className="m-0 font-['Barlow_Condensed',sans-serif] text-[clamp(3rem,8vw,6.25rem)] leading-[0.95] font-extrabold tracking-[-0.01em] text-[#3D5F58] uppercase">
            Ready to build something unforgettable?
          </h2>

          {/* Supporting text */}
          <div className="mt-3 pl-[0.6rem]">
            <p className="mb-[0.35rem] font-['Barlow_Condensed',sans-serif] text-2xl leading-normal font-bold text-black uppercase">
              Many minds. Infinite possibilities.
            </p>

            <p className="m-0 max-w-96 text-[1.375rem] leading-[1.3] text-black">
              One gathering. Countless perspectives. A world of possibilities
              waiting to unfold
            </p>
          </div>

          {/* QR registration card */}
          <div className="mt-8 ml-[0.6rem] inline-flex max-w-full items-center gap-4 rounded-[20px] border-2 border-black px-4 py-4 sm:gap-6 sm:pr-8 sm:pl-4">
            <img
              className="h-20 w-20 shrink-0 bg-white object-contain sm:h-26 sm:w-26"
              src={qrSrc}
              alt="QR code to register"
            />

            <span
              className="my-1 self-stretch w-0.5 shrink-0 bg-black"
              aria-hidden="true"
            />

            <p className="m-0 font-['Barlow_Condensed',sans-serif] text-[clamp(1.75rem,3vw,2.5rem)] leading-none font-extrabold text-[#0F3621] uppercase">
              Scan to
              <br />
              register !
            </p>
          </div>
        </div>

        {/* Illustration */}
        <div data-reveal="right" className="mx-auto w-full max-w-140 min-w-0">
          <img className="block h-auto w-full" src={artSrc} alt="" />
        </div>
      </div>
    </section>
  );
}
