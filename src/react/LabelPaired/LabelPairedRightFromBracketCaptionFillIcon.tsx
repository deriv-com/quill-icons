import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.836 5.984 2.883 2.883A.93.93 0 0 1 12 9.5a.94.94 0 0 1-.281.656L8.836 13.04a.8.8 0 0 1-.563.211.78.78 0 0 1-.773-.773V11h-3a.74.74 0 0 1-.75-.75v-1.5c0-.398.328-.75.75-.75h3V6.547c0-.422.352-.797.773-.797.211 0 .422.094.563.234M3.75 5.75h-1.5a.755.755 0 0 0-.75.75v6c0 .422.328.75.75.75h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-1.5A2.25 2.25 0 0 1 0 12.5v-6a2.25 2.25 0 0 1 2.25-2.25h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75' />
    </g>
    <defs>
      <clipPath id='44d02c55c55ac69e84160ddc8a538ceb__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketCaptionFillIcon);
export default ForwardRef;
