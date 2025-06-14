import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketCaptionFillIcon = (
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
      <path d='m5.086 5.984 2.883 2.883a.93.93 0 0 1 .281.633.94.94 0 0 1-.281.656L5.086 13.04a.8.8 0 0 1-.563.211.78.78 0 0 1-.773-.773V11h-3a.74.74 0 0 1-.75-.75v-1.5C0 8.352.328 8 .75 8h3V6.547c0-.422.352-.797.773-.797.211 0 .422.094.563.234M8.25 13.25h1.5c.398 0 .75-.328.75-.75v-6a.77.77 0 0 0-.75-.75h-1.5A.74.74 0 0 1 7.5 5c0-.398.328-.75.75-.75h1.5A2.25 2.25 0 0 1 12 6.5v6a2.25 2.25 0 0 1-2.25 2.25h-1.5A.74.74 0 0 1 7.5 14c0-.398.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='4a461f842dccdd5d8edadb5b64b46e82__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketCaptionFillIcon);
export default ForwardRef;
