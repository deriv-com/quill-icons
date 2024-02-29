import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.656 13.273q.75-.726 1.172-1.687A5.1 5.1 0 0 0 11.25 9.5q-.024-1.476-.727-2.648a4.9 4.9 0 0 0-1.875-1.875Q7.477 4.273 6 4.25q-1.476.024-2.648.727a4.9 4.9 0 0 0-1.875 1.875Q.773 8.023.75 9.5q0 1.125.422 2.086t1.172 1.687a2.98 2.98 0 0 1 1.054-1.64q.774-.609 1.852-.633h1.5q1.078.024 1.852.633a2.98 2.98 0 0 1 1.054 1.64m-.656.54q-.093-.891-.727-1.454-.61-.585-1.523-.609h-1.5q-.915.024-1.523.61-.633.561-.727 1.453 1.313.913 3 .937 1.688-.024 3-.937M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797m0-6q.633-.024.984-.562.282-.563 0-1.126A1.17 1.17 0 0 0 6 7.25q-.633.024-.984.563-.282.563 0 1.125.351.538.984.562M4.125 8.375q.024-1.054.938-1.617.938-.516 1.875 0 .913.563.937 1.617-.024 1.055-.937 1.617-.937.516-1.875 0-.915-.562-.938-1.617' />
    </g>
    <defs>
      <clipPath id='7845b90f35dc89e16cbca0c879c790c0__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserCaptionRegularIcon);
export default ForwardRef;
