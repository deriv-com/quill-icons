import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 9.5A3.746 3.746 0 0 1 4 5.75h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H4a2.25 2.25 0 0 0 0 4.5h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H4A3.73 3.73 0 0 1 .25 9.5m13.5 0A3.746 3.746 0 0 1 10 13.25H8.5a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75H10a2.25 2.25 0 0 0 0-4.5H8.5a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75H10a3.76 3.76 0 0 1 3.75 3.75m-9-.75h4.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-4.5A.74.74 0 0 1 4 9.5c0-.398.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='1a7b1f1e386c438736a2c9f04fc8ecc6__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleCaptionFillIcon);
export default ForwardRef;
