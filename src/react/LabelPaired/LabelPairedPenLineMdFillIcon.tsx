import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m14.156 4.625 1.219 1.219a2.02 2.02 0 0 1 0 2.843l-1.5 1.5-4.062-4.062 1.5-1.5a2.02 2.02 0 0 1 2.843 0m-12.343 9.5 7.28-7.281 4.063 4.062-7.281 7.281a2.7 2.7 0 0 1-1.156.688L.937 19.969a.64.64 0 0 1-.718-.188.64.64 0 0 1-.188-.718l1.094-3.782c.125-.437.375-.844.688-1.156M7.75 18.5h9.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-9.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='8c49e8ef465de5bf037ed72a410699f6__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineMdFillIcon);
export default ForwardRef;
