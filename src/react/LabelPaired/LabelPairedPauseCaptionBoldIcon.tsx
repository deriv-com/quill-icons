import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 6.125v6.75H2.5v-6.75zm-1.125 0C.25 5.515.742 5 1.375 5H2.5c.61 0 1.125.516 1.125 1.125v6.75C3.625 13.508 3.109 14 2.5 14H1.375A1.11 1.11 0 0 1 .25 12.875zm5.25 0v6.75h1.125v-6.75zm-1.125 0C4.375 5.515 4.867 5 5.5 5h1.125c.61 0 1.125.516 1.125 1.125v6.75c0 .633-.516 1.125-1.125 1.125H5.5a1.11 1.11 0 0 1-1.125-1.125z' />
    </g>
    <defs>
      <clipPath id='1f67261c6db8ad4b35f71e08f02840af__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseCaptionBoldIcon);
export default ForwardRef;
