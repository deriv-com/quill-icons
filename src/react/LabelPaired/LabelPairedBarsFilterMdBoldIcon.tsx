import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6.75A.74.74 0 0 1 .75 6h12.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75A.72.72 0 0 1 0 6.75m2 5a.74.74 0 0 1 .75-.75h8.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-8.5a.72.72 0 0 1-.75-.75m7 5a.74.74 0 0 1-.75.75h-2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5a.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='051dd7bfb958f13c046961fe94936d39__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterMdBoldIcon);
export default ForwardRef;
