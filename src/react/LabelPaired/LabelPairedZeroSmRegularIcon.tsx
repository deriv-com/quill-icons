import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroSmRegularIcon = (
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
      <path d='M.125 9Q.18 7.14 1.41 5.91T4.5 4.625q1.86.054 3.09 1.285T8.875 9v3.5q-.054 1.86-1.285 3.09T4.5 16.875q-1.86-.055-3.09-1.285T.125 12.5zM4.5 5.5q-1.477.027-2.488 1.012Q1.027 7.523 1 9v3.5q.027 1.476 1.012 2.488Q3.023 15.973 4.5 16q1.476-.027 2.488-1.012Q7.973 13.976 8 12.5V9q-.027-1.476-1.012-2.488Q5.977 5.527 4.5 5.5' />
    </g>
    <defs>
      <clipPath id='cb51a0aad91d4eeeffb9c54931e4f142__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroSmRegularIcon);
export default ForwardRef;
