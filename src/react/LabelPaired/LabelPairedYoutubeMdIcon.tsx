import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedYoutubeMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.156 7.906c.375 1.313.375 4.125.375 4.125s0 2.781-.375 4.125a2.08 2.08 0 0 1-1.5 1.5C14.312 18 9 18 9 18s-5.344 0-6.687-.344a2.08 2.08 0 0 1-1.5-1.5c-.375-1.343-.375-4.125-.375-4.125s0-2.812.375-4.125a2.13 2.13 0 0 1 1.5-1.531C3.656 6 9 6 9 6s5.313 0 6.656.375a2.13 2.13 0 0 1 1.5 1.531M7.25 14.563l4.438-2.532L7.25 9.5z' />
    </g>
    <defs>
      <clipPath id='c647dc971e40e82537c4f102b82ea6c0__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeMdIcon);
export default ForwardRef;
