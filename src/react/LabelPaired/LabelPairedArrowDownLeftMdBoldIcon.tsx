import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 17a.72.72 0 0 1-.75-.75v-7.5A.74.74 0 0 1 1.75 8a.76.76 0 0 1 .75.75v5.719l7.219-7.25a.736.736 0 0 1 1.031 0c.313.312.313.781 0 1.062L3.531 15.5H9.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75z' />
    </g>
    <defs>
      <clipPath id='1f12c3022dedae52889985b500fb24f3__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftMdBoldIcon);
export default ForwardRef;
