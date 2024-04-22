import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteCaptionFillIcon = (
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
      <path d='M3.75 3.5c.54 0 1.031.305 1.29.75h1.335c.61 0 1.125.516 1.125 1.125v.375H6.375A1.866 1.866 0 0 0 4.5 7.625V14H1.125A1.11 1.11 0 0 1 0 12.875v-7.5c0-.61.492-1.125 1.125-1.125h1.313c.257-.445.75-.75 1.312-.75m2.625 3h2.906c.281 0 .586.14.797.352l1.57 1.57c.211.21.352.515.352.797v5.156c0 .633-.516 1.125-1.125 1.125h-4.5a1.11 1.11 0 0 1-1.125-1.125v-6.75c0-.61.492-1.125 1.125-1.125M3.75 4.438A.555.555 0 0 0 3.188 5c0 .328.234.563.562.563A.555.555 0 0 0 4.313 5a.57.57 0 0 0-.563-.562' />
    </g>
    <defs>
      <clipPath id='e89e43b76d56e5becf1b603626f8c6a0__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteCaptionFillIcon);
export default ForwardRef;
