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
      <path d='M7.25 5.063V5.5a.45.45 0 0 1-.437.438H4.188A.43.43 0 0 1 3.75 5.5v-.437h-.875A.88.88 0 0 0 2 5.938v9.625c0 .492.383.874.875.874h5.25A.88.88 0 0 0 9 15.563V5.938a.9.9 0 0 0-.875-.875zm-6.562.875c0-1.204.957-2.188 2.187-2.188h5.25c1.203 0 2.188.984 2.188 2.188v9.625c0 1.23-.985 2.187-2.188 2.187h-5.25a2.16 2.16 0 0 1-2.187-2.187z' />
    </g>
    <defs>
      <clipPath id='704229d2241f47101538a9ea0a078047__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchSmBoldIcon);
export default ForwardRef;
