import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsMdBoldIcon = (
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
      <path d='M0 6.75A.74.74 0 0 1 .75 6h12.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75A.72.72 0 0 1 0 6.75m0 5A.74.74 0 0 1 .75 11h12.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.72.72 0 0 1-.75-.75m14 5a.74.74 0 0 1-.75.75H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h12.5a.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='7ff578b28c7a1e8130a6f8f41f1c19ef__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsMdBoldIcon);
export default ForwardRef;
