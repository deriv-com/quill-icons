import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillMdBoldIcon = (
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
      <path d='M3.5 7.5c0 1.125-.906 2-2 2v5c1.094 0 2 .906 2 2h11c0-1.094.875-2 2-2v-5c-1.125 0-2-.875-2-2zM0 8c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm9 1c1.063 0 2.031.594 2.594 1.5.531.938.531 2.094 0 3C11.03 14.438 10.063 15 9 15a3.03 3.03 0 0 1-2.625-1.5c-.531-.906-.531-2.062 0-3C6.938 9.594 7.906 9 9 9' />
    </g>
    <defs>
      <clipPath id='740872ed714f2035db73f1b38f107403__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillMdBoldIcon);
export default ForwardRef;
