import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroSmBoldIcon = (
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
      <path d='M.125 9Q.18 7.14 1.41 5.91T4.5 4.625q1.86.054 3.09 1.285T8.875 9v3.5q-.054 1.86-1.285 3.09T4.5 16.875q-1.86-.055-3.09-1.285T.125 12.5zM4.5 5.938q-1.312.027-2.16.902-.875.848-.902 2.16v3.5q.027 1.313.902 2.16.847.875 2.16.902 1.313-.027 2.16-.902.875-.848.902-2.16V9q-.027-1.312-.902-2.16-.848-.875-2.16-.902' />
    </g>
    <defs>
      <clipPath id='f72061608322009e1210ebbfa03867bc__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroSmBoldIcon);
export default ForwardRef;
