import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.438 13.375v-5.25q-.029-1.312-.903-2.16-.848-.875-2.16-.902h-1.75q-1.312.027-2.16.902-.875.848-.902 2.16v5.25q.027 1.313.902 2.16.847.875 2.16.902h1.75q1.313-.027 2.16-.902.875-.848.902-2.16M.25 8.125q.055-1.86 1.285-3.09t3.09-1.285h1.75q1.86.054 3.09 1.285t1.285 3.09v5.25q-.055 1.86-1.285 3.09t-3.09 1.285h-1.75q-1.86-.055-3.09-1.285T.25 13.375zm5.25-1.75q.383 0 .629.246a.85.85 0 0 1 .246.629v.875a.85.85 0 0 1-.246.629A.85.85 0 0 1 5.5 9a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V7.25q0-.383.246-.629a.85.85 0 0 1 .629-.246' />
    </g>
    <defs>
      <clipPath id='439342aa76b40cde225c4ddf53000039__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelSmBoldIcon);
export default ForwardRef;
