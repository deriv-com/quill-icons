import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 18.5h7c.25 0 .5-.219.5-.5v-2H11v2c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-7c0-1.094.875-2 2-2h2v1.5H2c-.281 0-.5.25-.5.5v7c0 .281.219.5.5.5m5-5h7c.25 0 .5-.219.5-.5V6c0-.25-.25-.5-.5-.5H7c-.281 0-.5.25-.5.5v7c0 .281.219.5.5.5M5 13V6c0-1.094.875-2 2-2h7c1.094 0 2 .906 2 2v7c0 1.125-.906 2-2 2H7c-1.125 0-2-.875-2-2' />
    </g>
    <defs>
      <clipPath id='896115b27014dd2279d69e0347cbf2f6__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneMdBoldIcon);
export default ForwardRef;
