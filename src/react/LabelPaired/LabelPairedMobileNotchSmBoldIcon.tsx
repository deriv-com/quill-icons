import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchSmBoldIcon = (
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
      <path d='M7.25 5.063V5.5q-.027.41-.437.438H4.188q-.411-.029-.438-.438v-.437h-.875a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.628v9.625q0 .383.246.63a.85.85 0 0 0 .629.245h5.25a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.628V5.938a.85.85 0 0 0-.246-.63.85.85 0 0 0-.629-.245zm-6.562.875q.027-.93.628-1.56.63-.6 1.559-.628h5.25q.93.027 1.559.629.6.63.629 1.559v9.625q-.028.93-.63 1.558-.628.601-1.558.629h-5.25q-.93-.027-1.559-.629-.6-.63-.629-1.558z' />
    </g>
    <defs>
      <clipPath id='d3b27d78565a42cbd6393ba47827cf01__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchSmBoldIcon);
export default ForwardRef;
