import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaybackSpeedSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.563 10.75c0 3.336-2.489 6.098-5.688 6.508v-.875c2.707-.41 4.813-2.79 4.813-5.633a5.68 5.68 0 0 0-4.813-5.605V4.27c3.2.41 5.688 3.171 5.688 6.48M3.637 6.156l-.63-.601A6.2 6.2 0 0 1 6.126 4.27v.875a5.6 5.6 0 0 0-2.488 1.011m-1.23 1.258a5.34 5.34 0 0 0-1.04 2.461H.492a6.23 6.23 0 0 1 1.285-3.09zm0 6.7-.63.628a6.2 6.2 0 0 1-1.285-3.117h.875c.137.93.492 1.777 1.04 2.488m3.718 2.269v.875a6.2 6.2 0 0 1-3.117-1.285l.629-.63c.71.548 1.558.903 2.488 1.04m-.656-9.078c.136-.082.328-.055.465.027l4.375 3.063c.109.082.191.218.191.355 0 .164-.082.3-.191.383l-4.375 3.062a.56.56 0 0 1-.465.028.48.48 0 0 1-.219-.41V7.687c0-.164.082-.3.219-.382m.656 1.23v4.457l3.172-2.242z' />
    </g>
    <defs>
      <clipPath id='0816b0fa5456abccaaa8e7d00aec8f10__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaybackSpeedSmRegularIcon);
export default ForwardRef;
