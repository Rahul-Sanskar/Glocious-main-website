import Image from "next/image";
import Link from "next/link";

/**
 * BrandLogo — the single definition of the Glocious lockup.
 *
 * The mark is the emblem taken from the official logo artwork
 * (`public/images/glocious logo.jpeg` → `glocious-mark.png`, background keyed
 * to transparent). A transparent mark is what lets it sit on the navy dark
 * theme without a white plate, which the original JPEG would have required.
 *
 * The wordmark stays *live text* rather than baked into the image: it keeps
 * the brand name selectable, translatable and readable by search engines, and
 * it scales independently of the raster mark.
 */

type BrandLogoProps = {
  /** Wrap in a link to this href. Pass `null` for a non-interactive lockup. */
  href?: string | null;
  /** Rendered height of the mark in px. The wordmark scales with it. */
  size?: number;
  /** Text beside the mark. */
  wordmark?: string;
  /** Mark the mark image as a priority fetch (use above the fold). */
  preload?: boolean;
  onClick?: () => void;
  className?: string;
  wordmarkClassName?: string;
};

export default function BrandLogo({
  href = "/",
  size = 32,
  wordmark = "Glocious",
  preload = false,
  onClick,
  className = "",
  wordmarkClassName = "text-[16px]",
}: BrandLogoProps) {
  const content = (
    <>
      <Image
        src="/images/glocious-mark.png"
        alt=""
        width={408}
        height={492}
        priority={preload}
        sizes="64px"
        className="shrink-0 select-none"
        style={{ height: size, width: "auto" }}
      />
      <span className={`font-display font-bold tracking-tight ${wordmarkClassName}`}>
        {wordmark}
      </span>
    </>
  );

  const classes = `flex items-center gap-2 rounded text-content-primary ${className}`;

  if (!href) {
    return <span className={classes}>{content}</span>;
  }

  return (
    <Link href={href} onClick={onClick} className={classes} aria-label={`${wordmark} — home`}>
      {content}
    </Link>
  );
}
