import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoMdBoldIcon = (
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
      <path d='M8 5.5q-1.78 0-3.25.875-1.469.844-2.375 2.375A6.45 6.45 0 0 0 1.5 12q0 1.72.875 3.25.906 1.531 2.375 2.375Q6.22 18.5 8 18.5t3.25-.875q1.469-.843 2.375-2.375A6.45 6.45 0 0 0 14.5 12a6.45 6.45 0 0 0-.875-3.25q-.906-1.53-2.375-2.375Q9.781 5.5 8 5.5M8 20q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20M6.969 9.781l-.75.563q-.594.375-1.063-.156-.375-.564.157-1.032l.75-.594A2.8 2.8 0 0 1 7.78 8h.094Q9 8.063 9.75 8.813q.72.75.75 1.874a2.76 2.76 0 0 1-.844 1.938l-2 1.875h2.594q.687.063.75.75-.063.687-.75.75h-4.5q-.5-.03-.687-.469-.157-.468.187-.812l3.375-3.188A1.1 1.1 0 0 0 9 10.687q0-.5-.344-.812a1.05 1.05 0 0 0-.812-.344L7.75 9.5a1.2 1.2 0 0 0-.781.281' />
    </g>
    <defs>
      <clipPath id='f68ecbd769e1b1c1dae986355b2d9565__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoMdBoldIcon);
export default ForwardRef;
