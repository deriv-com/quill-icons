import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10q.062-2.125 1.469-3.531Q2.875 5.063 5 5q2.125.063 3.531 1.469T10 10v4q-.062 2.126-1.469 3.531Q7.126 18.937 5 19q-2.125-.062-3.531-1.469Q.063 16.125 0 14zm5-3.5q-1.5.031-2.469 1.031Q1.531 8.5 1.5 10v4q.031 1.5 1.031 2.469.969 1 2.469 1.031 1.5-.031 2.469-1.031Q8.469 15.5 8.5 14v-4q-.031-1.5-1.031-2.469Q6.5 6.531 5 6.5' />
    </g>
    <defs>
      <clipPath id='898b04670b7baa62cc91fe8c6fd0f8f3__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroMdBoldIcon);
export default ForwardRef;
