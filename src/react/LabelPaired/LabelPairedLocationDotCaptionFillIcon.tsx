import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.04 15.219a.707.707 0 0 1-1.102 0C2.742 13.695 0 10.063 0 8a4.501 4.501 0 0 1 9 0c0 2.063-2.742 5.695-3.96 7.219M4.5 6.5c-.54 0-1.031.305-1.312.75a1.55 1.55 0 0 0 0 1.5c.28.469.773.75 1.312.75.516 0 1.008-.281 1.29-.75a1.55 1.55 0 0 0 0-1.5c-.282-.445-.774-.75-1.29-.75' />
    </g>
    <defs>
      <clipPath id='5ce09859b02221922afceba6ec56f10c__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotCaptionFillIcon);
export default ForwardRef;
