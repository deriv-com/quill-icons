import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroMdRegularIcon = (
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
      <path d='M0 10q.062-2.125 1.469-3.531Q2.875 5.063 5 5q2.125.063 3.531 1.469T10 10v4q-.062 2.126-1.469 3.531Q7.126 18.937 5 19q-2.125-.062-3.531-1.469Q.063 16.125 0 14zm5-4q-1.687.03-2.844 1.156Q1.031 8.312 1 10v4q.03 1.688 1.156 2.844Q3.312 17.969 5 18q1.688-.03 2.844-1.156Q8.969 15.688 9 14v-4q-.03-1.687-1.156-2.844Q6.688 6.031 5 6' />
    </g>
    <defs>
      <clipPath id='41872664c6f4b65d2d6a12abd1b432f7__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroMdRegularIcon);
export default ForwardRef;
