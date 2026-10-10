import PrizeCard from "../components/PrizeCard";

export default function PrizePage() {
  return (
    <section className="figma-scale-section relative aspect-video w-full overflow-hidden @container bg-[#f2f2ea] text-[#3c6059]">
      <h1 className="absolute left-1/2 top-[4.1%] -translate-x-1/2 text-center text-[4.6cqw] font-black uppercase leading-[0.99] tracking-[-0.04em] drop-shadow-[0.35cqw_0.45cqw_0px_#b3b7aa] max-[700px]:text-[9cqw]">
        What's at
        <br />
        stake?
      </h1>

      <aside className="absolute left-[4.8%] top-[19.3%] w-[21.2%] border-[0.14cqw] border-[#b58e00] bg-[#ffca05] px-[1.5%] py-[1%] text-[1.12cqw] font-bold uppercase leading-[1.7] shadow-[0.4cqw_0.5cqw_1cqw_rgba(105,63,76,0.35)] max-[700px]:left-[5%] max-[700px]:top-[22%] max-[700px]:w-[40%] max-[700px]:text-[2.6cqw]">
        Build bold. Contribute more.
        <br />
        Win big.
      </aside>

      <aside className="absolute right-[5.4%] top-[19.3%] w-[21.2%] border-[0.14cqw] border-[#b58e00] bg-[#ffca05] px-[1.5%] py-[1%] text-[1.12cqw] font-bold uppercase leading-[1.7] shadow-[0.4cqw_0.5cqw_1cqw_rgba(105,63,76,0.35)] max-[700px]:right-[5%] max-[700px]:top-[22%] max-[700px]:w-[40%] max-[700px]:text-[2.6cqw]">
        ₹10,000 + $2,200 prize pool
        <br />
        for builders, creators &
        <br />
        open-source contributors
      </aside>

      <div className="absolute left-1/2 top-[29.8%] w-[31.2%] -translate-x-1/2 max-[700px]:top-[40%] max-[700px]:w-[52%]">
        <PrizeCard rank="WINNER" prize="₹XXXX" icon="trophy" featured />
      </div>

      <div className="absolute left-[17.7%] top-[63.2%] w-[29.5%] max-[700px]:left-[7%] max-[700px]:top-[68%] max-[700px]:w-[40%]">
        <PrizeCard rank="RUNNER UP" prize="₹XXXX" icon="silver" />
      </div>

      <div className="absolute right-[17.7%] top-[63.2%] w-[29.5%] max-[700px]:right-[7%] max-[700px]:top-[68%] max-[700px]:w-[40%]">
        <PrizeCard rank="SECOND RUNNER UP" prize="₹XXXX" icon="bronze" />
      </div>

      <footer className="absolute bottom-[5%] left-0 flex w-full items-center justify-center gap-[0.5%] text-center text-[1.12cqw] font-black uppercase max-[700px]:bottom-[3%] max-[700px]:text-[2.1cqw]">
        <span>Special contribution winner to be declared by MLH</span>
        <span className="border-[0.14cqw] border-[#c49b00] bg-[#ffca05] px-[0.6%] py-[0.3%] text-[2.1cqw] leading-tight text-[#17483d] shadow-[0.4cqw_0.5cqw_0.8cqw_rgba(105,63,76,0.35)]">
          More than 2000$
        </span>
      </footer>
    </section>
  );
}
