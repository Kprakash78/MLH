function MilestoneIcon({ type }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-[3cqw] w-[3cqw]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "megaphone":
      return (
        <svg {...props}>
          <path d="M3 10v4h4l9 5V5l-9 5H3Z" fill="currentColor" />
          <path d="m7 14 2 6h4l-3-5M19 9l2-1m-2 7 2 1" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect
            x="4"
            y="10"
            width="16"
            height="11"
            rx="1.5"
            fill="currentColor"
          />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <circle cx="12" cy="15" r="1" fill="#ffe477" />
        </svg>
      );
    case "code":
      return (
        <svg {...props}>
          <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-1-13-5 16" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <circle cx="12" cy="7" r="3" fill="currentColor" />
          <circle cx="5" cy="9" r="2.5" fill="currentColor" />
          <circle cx="19" cy="9" r="2.5" fill="currentColor" />
          <path d="M5 19v-2a7 7 0 0 1 14 0v2H5Z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TimelineStep({
  day,
  title,
  subtitle,
  description,
  icon,
}) {
  return (
    <article className="group relative z-10 flex min-w-0 flex-col items-center text-center">
      <div
        className="absolute top-[7.15cqw] h-[2.52cqw] w-[0.18cqw] bg-[#ffffff]"
        aria-hidden="true"
      />

      <div className="flex h-[7.15cqw] w-[7.15cqw] items-center justify-center rounded-full bg-[#ffe477] text-[#153b34] transition-[box-shadow,transform] duration-700 ease-out group-hover:rotate-3 group-hover:shadow-[0_0.45cqw_0.8cqw_rgba(0,0,0,0.22)]">
        <MilestoneIcon type={icon} />
      </div>

      <div className="mt-[2.52cqw] flex h-[6.17cqw] w-[6.17cqw] items-center justify-center rounded-full border-[0.28cqw] border-[#101714] bg-[#ffcf0a] text-[2.8cqw] font-black leading-none text-black shadow-[0_0.25cqw_0.35cqw_rgba(0,0,0,0.35)] transition-[box-shadow,transform] duration-700 ease-out group-hover:translate-y-[-0.35cqw] group-hover:shadow-[0_0.55cqw_0.65cqw_rgba(0,0,0,0.4)]">
        {day}
      </div>

      <h2 className="mt-[1.82cqw] text-[2.1cqw] font-bold uppercase leading-[1.15] tracking-[0.02em]">
        {title}
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </h2>

      <p className="mt-[0.42cqw] text-[1.55cqw] leading-[1.4] text-[#a6bbb4]">
        {description.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </p>
    </article>
  );
}
