import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 9q.027 1.476 1.012 2.488 1.011.985 2.488 1.012 1.477-.027 2.46-.984.958-.985 1.04-2.434V9q-.027-1.476-1.012-2.488Q5.977 5.527 4.5 5.5q-1.477.027-2.488 1.012Q1.027 7.523 1 9m4.402 4.293a5 5 0 0 1-.902.082q-1.86-.055-3.09-1.285T.125 9Q.18 7.14 1.41 5.91T4.5 4.625q1.86.054 3.09 1.285T8.875 9v.164a4.63 4.63 0 0 1-1.121 2.816l-4.238 4.758q-.3.274-.63.028-.272-.3-.027-.63z' />
    </g>
    <defs>
      <clipPath id='cb5d8583c6d7fa2466ab8e3e10730bf2__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineSmRegularIcon);
export default ForwardRef;
