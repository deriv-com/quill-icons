import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockMdFillIcon = (
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
      <path d='M4.5 8.5V10h5V8.5C9.5 7.125 8.375 6 7 6a2.487 2.487 0 0 0-2.5 2.5m-2 1.5V8.5C2.5 6.031 4.5 4 7 4c2.469 0 4.5 2.031 4.5 4.5V10h.5c1.094 0 2 .906 2 2v6c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-6c0-1.094.875-2 2-2z' />
    </g>
    <defs>
      <clipPath id='080c3563bacc882fd2ffc875d3e18b9b__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockMdFillIcon);
export default ForwardRef;
