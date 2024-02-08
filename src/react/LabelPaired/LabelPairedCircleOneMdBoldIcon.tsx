import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleOneMdBoldIcon = (
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
      <path d='M14.5 12q0-1.78-.875-3.25-.843-1.469-2.375-2.375A6.45 6.45 0 0 0 8 5.5a6.45 6.45 0 0 0-3.25.875q-1.53.906-2.375 2.375Q1.5 10.22 1.5 12t.875 3.25q.844 1.469 2.375 2.375A6.45 6.45 0 0 0 8 18.5a6.45 6.45 0 0 0 3.25-.875q1.531-.906 2.375-2.375.875-1.469.875-3.25M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m8.375-3.906q.375.219.375.656v5.75H10q.687.063.75.75-.063.687-.75.75H6q-.687-.063-.75-.75.063-.687.75-.75h1.25v-4.469l-.625.375q-.625.282-1.031-.281-.282-.625.281-1.031l1.75-1q.375-.187.75 0' />
    </g>
    <defs>
      <clipPath id='3009a754f84373d4d16d80d73f857b70__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleOneMdBoldIcon);
export default ForwardRef;
