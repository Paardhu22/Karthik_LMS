/**
 * Displacement maps used by `.lg--bar` / `.lg--btn` in globals.css.
 *
 * Turbulence is blurred first so the noise field is smooth — a raw fractal map
 * shatters the backdrop instead of bending it — then fed to feDisplacementMap,
 * which is what makes the glass refract what is behind it rather than just
 * blurring it. Rendered once, near the top of <body>.
 */
export default function GlassFilters() {
  return (
    <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute h-0 w-0">
      <defs>
        <filter id="lg-refract-bar" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.013" numOctaves="2" seed="17" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="3.2" result="softNoise" />
          <feDisplacementMap in="SourceGraphic" in2="softNoise" scale="24" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        <filter id="lg-refract-btn" x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.014 0.02" numOctaves="2" seed="42" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
          <feDisplacementMap in="SourceGraphic" in2="softNoise" scale="13" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
