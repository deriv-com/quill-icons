import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleZeroMdBoldIcon = (
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
      <path d='M8 5.5q-1.78 0-3.25.875-1.469.844-2.375 2.375A6.45 6.45 0 0 0 1.5 12q0 1.72.875 3.25.906 1.531 2.375 2.375Q6.22 18.5 8 18.5t3.25-.875q1.469-.843 2.375-2.375A6.45 6.45 0 0 0 14.5 12a6.45 6.45 0 0 0-.875-3.25q-.906-1.53-2.375-2.375Q9.781 5.5 8 5.5M8 20q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20M8 8q1.281.031 2.125.875.844.843.875 2.125v2q-.03 1.281-.875 2.125Q9.282 15.969 8 16q-1.28-.03-2.125-.875Q5.032 14.282 5 13v-2q.031-1.28.875-2.125Q6.718 8.032 8 8m-1.5 3v2q.03.624.438 1.063.436.405 1.062.437a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 9.5 13v-2a1.63 1.63 0 0 0-.437-1.062A1.63 1.63 0 0 0 8 9.5a1.63 1.63 0 0 0-1.062.438A1.63 1.63 0 0 0 6.5 11' />
    </g>
    <defs>
      <clipPath id='ddb5e8be1a3322d3cbaeee9baaf10ed4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleZeroMdBoldIcon);
export default ForwardRef;
