import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelMdRegularIcon = (
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
      <path d='M11 15V9q-.03-1.687-1.156-2.844Q8.688 5.031 7 5H5q-1.687.03-2.844 1.156Q1.031 7.312 1 9v6q.03 1.688 1.156 2.844Q3.312 18.969 5 19h2q1.688-.03 2.844-1.156Q10.969 16.687 11 15M0 9q.062-2.125 1.469-3.531Q2.875 4.063 5 4h2q2.125.063 3.531 1.469T12 9v6q-.062 2.126-1.469 3.531Q9.126 19.937 7 20H5q-2.125-.062-3.531-1.469Q.063 17.125 0 15zm6.5-1.5v2q-.03.47-.5.5-.469-.03-.5-.5v-2q.031-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='291f84f153999cfee8da43d887498563__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelMdRegularIcon);
export default ForwardRef;
