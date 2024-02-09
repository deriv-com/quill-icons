import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineMdBoldIcon = (
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
      <path d='M14.5 12q0-1.78-.875-3.25-.843-1.469-2.375-2.375A6.45 6.45 0 0 0 8 5.5a6.45 6.45 0 0 0-3.25.875q-1.53.906-2.375 2.375Q1.5 10.22 1.5 12t.875 3.25q.844 1.469 2.375 2.375A6.45 6.45 0 0 0 8 18.5a6.45 6.45 0 0 0 3.25-.875q1.531-.906 2.375-2.375.875-1.469.875-3.25M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m8-2.5q-.843.03-1.312.75-.375.75 0 1.5.468.72 1.312.75.844-.03 1.313-.75.375-.75 0-1.5Q8.844 9.53 8 9.5m-.812 4.375a2.94 2.94 0 0 1-1.563-1.062Q5.031 12.063 5 11q.031-1.28.875-2.125Q6.718 8.032 8 8q1.281.031 2.125.875.844.843.875 2.125-.03 1.595-1.219 2.625L7.25 15.813q-.563.406-1.062-.063-.406-.563.062-1.062z' />
    </g>
    <defs>
      <clipPath id='b6457b5e2726f0cc43e3a6aea19a58c6__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineMdBoldIcon);
export default ForwardRef;
