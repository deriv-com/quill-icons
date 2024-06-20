import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixSmBoldIcon = (
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
      <path d='M7.563 12.5c0-1.668-1.395-3.062-3.063-3.062a3 3 0 0 0-2.242.984l-.137.164a2.94 2.94 0 0 0-.683 1.914A3.057 3.057 0 0 0 4.5 15.563 3.075 3.075 0 0 0 7.563 12.5M4.09 8.152c.137 0 .273-.027.41-.027A4.39 4.39 0 0 1 8.875 12.5 4.37 4.37 0 0 1 4.5 16.875 4.353 4.353 0 0 1 .125 12.5c0-1.121.41-2.16 1.121-2.926l3.828-4.703a.65.65 0 0 1 .93-.082.65.65 0 0 1 .082.93z' />
    </g>
    <defs>
      <clipPath id='2ee997b7ff7864afa4119b4f79049372__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixSmBoldIcon);
export default ForwardRef;
