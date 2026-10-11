import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * InteractiveHoverButton
 * 
 * Adapted for Hacktoberfest 2026 retro aesthetic:
 * - Coral-red/salmon base background (#E97B77)
 * - Dark uppercase bold typography with dark outline border (#231F20)
 * - Hard offset shadow (4px 4px 0 #231F20)
 * - Expanding circle in dark sage green (#2c4741)
 * - Warm off-white hover text and arrow (#F2F2EB)
 * - Supports both <button> and <a> link semantics through asChild or href
 */
export const InteractiveHoverButton = React.forwardRef(function InteractiveHoverButton(
  {
    children,
    text = "REGISTER NOW",
    className,
    as: Component = "button",
    href,
    target,
    rel,
    ...props
  },
  ref
) {
  const Tag = href ? "a" : Component;
  const content = children || text;

  return (
    <Tag
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "interactive-hover-btn-root group relative inline-flex items-center justify-center cursor-pointer overflow-hidden text-center select-none",
        className
      )}
      {...props}
    >
      {/* Button content matching Figma reference without overlapping dot */}
      <span className="interactive-hover-btn-content relative z-10 inline-flex items-center justify-center gap-1 sm:gap-2 w-full px-1 sm:px-2">
        <span className="interactive-hover-btn-text whitespace-nowrap tracking-tight sm:tracking-wider">{content}</span>
        <span className="interactive-hover-btn-badge inline-flex items-center justify-center bg-white rounded-[2px] sm:rounded-[4px] p-0.5 sm:p-1 text-[#231F20] shadow-sm transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0">
          <ArrowRight className="interactive-hover-btn-arrow" />
        </span>
      </span>
    </Tag>
  );
});

export default InteractiveHoverButton;
