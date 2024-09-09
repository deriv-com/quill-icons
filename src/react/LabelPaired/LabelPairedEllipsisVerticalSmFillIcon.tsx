import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={4}
    height={22}
    viewBox='0 0 4 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 13.594a1.531 1.531 0 0 1 1.313 2.297A1.47 1.47 0 0 1 2 16.656c-.574 0-1.066-.273-1.34-.765A1.531 1.531 0 0 1 2 13.594m0-4.375a1.531 1.531 0 0 1 1.313 2.297A1.47 1.47 0 0 1 2 12.28c-.574 0-1.066-.273-1.34-.765A1.531 1.531 0 0 1 2 9.219m1.531-2.844a1.531 1.531 0 0 1-2.297 1.34C.742 7.44.47 6.949.47 6.375c0-.547.273-1.04.765-1.312a1.53 1.53 0 0 1 2.297 1.312' />
    </g>
    <defs>
      <clipPath id='8b1d176eea0f90acbd96dd0abda810ef__a'>
        <path d='M0 0h4v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalSmFillIcon);
export default ForwardRef;
