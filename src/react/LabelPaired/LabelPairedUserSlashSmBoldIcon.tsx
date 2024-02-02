import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.316 3.887 5.5 7.168q.054-1.449 1.04-2.406Q7.522 3.777 9 3.75q1.476.027 2.488 1.012.985 1.011 1.012 2.488-.027 1.23-.738 2.16a3.54 3.54 0 0 1-1.86 1.23l7.602 5.934q.438.411.11.93-.411.438-.93.11L.496 4.925q-.437-.411-.11-.93.411-.437.93-.11m6.891 5.386q.355.165.793.165.93-.028 1.559-.63.6-.628.629-1.558-.028-.93-.63-1.559-.628-.6-1.558-.628-.93.027-1.559.628-.6.63-.628 1.559 0 .71.41 1.285zm-.738 2.79 1.668 1.312H7.742q-1.367.027-2.324.875-.984.847-1.203 2.188h8.805l1.585 1.257a.8.8 0 0 1-.3.055H3.695a.73.73 0 0 1-.574-.246.73.73 0 0 1-.246-.574q.054-1.996 1.34-3.336 1.285-1.368 3.254-1.531' />
    </g>
    <defs>
      <clipPath id='1273e745156c0d1b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashSmBoldIcon);
export default ForwardRef;
