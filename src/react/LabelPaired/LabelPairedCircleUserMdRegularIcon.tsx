import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserMdRegularIcon = (
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
      <path d='M12.875 17.031a7.05 7.05 0 0 0 1.563-2.25A6.8 6.8 0 0 0 15 12q-.03-1.969-.969-3.531a6.55 6.55 0 0 0-2.5-2.5Q9.97 5.032 8 5q-1.969.03-3.531.969a6.55 6.55 0 0 0-2.5 2.5Q1.032 10.03 1 12q0 1.5.563 2.781a7.05 7.05 0 0 0 1.562 2.25 3.97 3.97 0 0 1 1.406-2.187Q5.562 14.03 7 14h2q1.437.03 2.469.844a3.97 3.97 0 0 1 1.406 2.187M12 17.75q-.125-1.188-.969-1.937Q10.22 15.032 9 15H7q-1.219.03-2.031.813-.844.75-.969 1.937Q5.75 18.97 8 19q2.25-.03 4-1.25M8 20q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20m0-8q.844-.03 1.313-.75.375-.75 0-1.5Q8.844 9.03 8 9q-.843.03-1.312.75-.375.75 0 1.5.468.72 1.312.75m-2.5-1.5q.031-1.406 1.25-2.156 1.25-.688 2.5 0 1.22.75 1.25 2.156-.03 1.407-1.25 2.156-1.25.688-2.5 0-1.219-.75-1.25-2.156' />
    </g>
    <defs>
      <clipPath id='70712ca7e3bee8d23644e117e4413e46__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserMdRegularIcon);
export default ForwardRef;
