import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroSmBoldIcon = (
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
      <path d='M.125 9A4.37 4.37 0 0 1 4.5 4.625 4.39 4.39 0 0 1 8.875 9v3.5A4.37 4.37 0 0 1 4.5 16.875 4.353 4.353 0 0 1 .125 12.5zM4.5 5.938A3.075 3.075 0 0 0 1.438 9v3.5A3.057 3.057 0 0 0 4.5 15.563 3.075 3.075 0 0 0 7.563 12.5V9c0-1.668-1.395-3.062-3.063-3.062' />
    </g>
    <defs>
      <clipPath id='c2f632c33816b4a575d4239e863df161__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroSmBoldIcon);
export default ForwardRef;
