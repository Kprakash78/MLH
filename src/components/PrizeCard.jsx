import winnerTrophy from "../assets/images/trophy 1.png";

function AwardIcon({ type }) {
  if (type === "trophy") {
    return (
      <img
        src={winnerTrophy}
        alt=""
        className="h-[7.2cqw] w-[7.2cqw] object-contain"
      />
    );
  }

  const bronze = type === "bronze";

  return (
    <svg
      viewBox="0 0 36 38"
      className="h-[4.8cqw] w-[4.8cqw]"
      fill="none"
      stroke="#244c42"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M8 3h8l3 12-6 5-7-11Z" fill="#c5e0d9" />
      <path d="M28 3h-8l-3 12 6 5 7-11Z" fill="#c5e0d9" />
      <circle cx="18" cy="24" r="9" fill={bronze ? "#e6a044" : "#e6e7d9"} />
      <circle cx="18" cy="24" r="6.5" stroke="#fff1a0" />
      <text
        x="18"
        y="27"
        fill="#183f35"
        stroke="none"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
      >
        {bronze ? "3" : "2"}
      </text>
    </svg>
  );
}

export default function PrizeCard({ rank, prize, icon, featured = false }) {
  if (featured) {
    return (
      <article className="relative h-[13.5cqw] w-full rounded-[1.1cqw] border-b-[0.55cqw] border-[#e8aa00] bg-[#ffca05] shadow-[0.55cqw_0.55cqw_0_#272523] transition-[filter,transform,box-shadow] duration-500 ease-out hover:translate-y-[-0.5cqw] hover:shadow-[0.7cqw_0.8cqw_0_#272523] hover:brightness-105">
        <div className="absolute left-[1.5%] top-[68%]">
          <p className="text-[0.7cqw] font-bold uppercase leading-none text-[#5e6653]">
            {rank}
          </p>
          <p className="mt-[0.4cqw] text-[1.8cqw] font-black leading-none text-[#31584e]">
            {prize}
          </p>
        </div>

        <div className="absolute right-[4%] top-[24%] transition-transform duration-700 ease-out hover:rotate-6 hover:scale-110">
          <AwardIcon type={icon} />
        </div>
      </article>
    );
  }

  return (
    <article className="relative h-[10.5cqw] w-full border-b-[0.55cqw] border-r-[0.55cqw] border-[#292625] bg-transparent transition-[filter,transform,box-shadow] duration-500 ease-out hover:translate-y-[-0.45cqw] hover:brightness-105">
      <div className="absolute left-[3%] top-[50%]">
        <p className="whitespace-nowrap text-[0.7cqw] font-bold uppercase leading-none text-[#5b6a62]">
          {rank}
        </p>
        <p className="mt-[0.5cqw] text-[1.8cqw] font-black leading-none text-[#3c6059]">
          {prize}
        </p>
      </div>

      <div className="absolute right-[4%] top-[12%] transition-transform duration-700 ease-out hover:-rotate-6 hover:scale-110">
        <AwardIcon type={icon} />
      </div>
    </article>
  );
}
