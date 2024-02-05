import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.563 16q.027.41.437.438h7q.41-.028.438-.438V8.125H7.25a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.063H2q-.41.027-.437.437zM2 3.75h4.54q.71 0 1.23.52l2.46 2.46q.52.52.52 1.258V16q-.027.738-.52 1.23-.492.493-1.23.52H2q-.738-.027-1.23-.52Q.277 16.739.25 16V5.5q.027-.738.52-1.23.492-.493 1.23-.52m2.488 6.371L5.5 11.434l1.012-1.313q.41-.437.93-.11.437.411.109.93L6.32 12.5l1.23 1.559q.328.519-.11.93-.519.328-.93-.11L5.5 13.566 4.488 14.88q-.41.437-.93.11-.437-.411-.109-.93L4.68 12.5l-1.23-1.559q-.328-.519.11-.93.519-.328.93.11' />
    </g>
    <defs>
      <clipPath id='f49ac0e58aafd1105a0be2799e3847c5__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelSmBoldIcon);
export default ForwardRef;
