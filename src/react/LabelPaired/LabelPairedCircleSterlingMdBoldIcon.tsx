import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingMdBoldIcon = (
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
      <path d='M14.5 12q0-1.78-.875-3.25-.843-1.469-2.375-2.375A6.45 6.45 0 0 0 8 5.5a6.45 6.45 0 0 0-3.25.875q-1.53.906-2.375 2.375Q1.5 10.22 1.5 12t.875 3.25q.844 1.469 2.375 2.375A6.45 6.45 0 0 0 8 18.5a6.45 6.45 0 0 0 3.25-.875q1.531-.906 2.375-2.375.875-1.469.875-3.25M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m8.188-3q-.406 0-.688.281a.94.94 0 0 0-.281.688V11H8.5q.47.031.5.5-.03.47-.5.5H7.25v.313q0 .874-.312 1.687h3.312q.687.063.75.75-.063.687-.75.75h-4.5a.7.7 0 0 1-.625-.344.75.75 0 0 1-.031-.75l.281-.594q.375-.687.375-1.5V12H5.5q-.469-.03-.5-.5.031-.469.5-.5h.25l-.031-1.031q.03-1.063.718-1.75t1.75-.719q.47 0 .907.188l.937.375q.625.311.406.968-.311.594-.968.406l-.938-.374A1.1 1.1 0 0 0 8.187 9' />
    </g>
    <defs>
      <clipPath id='a4eaa5a169e6bb2e62edf253f0ef4800__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingMdBoldIcon);
export default ForwardRef;
