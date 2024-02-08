import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.313 7.25V9h4.375V7.25q-.028-.93-.63-1.559-.628-.6-1.558-.628-.93.027-1.559.628-.6.63-.628 1.559M3 9V7.25q.027-1.476 1.012-2.488Q5.023 3.777 6.5 3.75q1.476.027 2.488 1.012Q9.973 5.773 10 7.25V9h.875q.738.027 1.23.52.493.492.52 1.23V16q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-5.25q.027-.738.52-1.23.492-.493 1.23-.52zm-1.312 1.75V16q.027.41.437.438h8.75q.41-.028.438-.438v-5.25q-.028-.41-.438-.437h-8.75q-.41.027-.437.437' />
    </g>
    <defs>
      <clipPath id='7919de7eb33bd249f072981a3c3773b9__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockSmBoldIcon);
export default ForwardRef;
