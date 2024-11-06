import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownSmFillIcon = (
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
      <path d='M4.871 16.629.496 12.254a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l2.899 2.87V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v8.395l2.871-2.872a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23L6.103 16.63a.843.843 0 0 1-1.23 0' />
    </g>
    <defs>
      <clipPath id='5cbda73dc5e35f9f109b08f39fcf9aa9__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownSmFillIcon);
export default ForwardRef;
