import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.86 9.14 3 20.25h9.75v-7.125q.095-1.03 1.125-1.125 1.032.095 1.125 1.125v7.125h1.875q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H15v4.875q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125V22.5H1.125q-.609 0-.984-.562-.282-.516 0-1.079L6.89 8.11q.563-.89 1.5-.468.89.563.468 1.5' />
    </g>
    <defs>
      <clipPath id='3bfe091b8427e38efc889bf40bb786bb__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourXlBoldIcon);
export default ForwardRef;
