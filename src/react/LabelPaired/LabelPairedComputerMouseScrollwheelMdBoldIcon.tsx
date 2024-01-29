import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelMdBoldIcon = (
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
      <path d='M10.5 15V9q-.031-1.5-1.031-2.469Q8.5 5.531 7 5.5H5q-1.5.031-2.469 1.031Q1.531 7.5 1.5 9v6q.031 1.5 1.031 2.469.969 1 2.469 1.031h2q1.5-.031 2.469-1.031 1-.969 1.031-2.469M0 9q.062-2.125 1.469-3.531Q2.875 4.063 5 4h2q2.125.063 3.531 1.469T12 9v6q-.062 2.126-1.469 3.531Q9.126 19.937 7 20H5q-2.125-.062-3.531-1.469Q.063 17.125 0 15zm6-2q.437 0 .719.281A.97.97 0 0 1 7 8v1a.97.97 0 0 1-.281.719A.97.97 0 0 1 6 10a.97.97 0 0 1-.719-.281A.97.97 0 0 1 5 9V8q0-.437.281-.719A.97.97 0 0 1 6 7' />
    </g>
    <defs>
      <clipPath id='d9cce3e1b8dec220ddbd0235cea7cd07__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelMdBoldIcon);
export default ForwardRef;
