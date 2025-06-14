import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.5 4.75a.74.74 0 0 1 .75-.75h4.969a.74.74 0 0 1 .75.75v5c0 .438-.313.75-.75.75a.74.74 0 0 1-.75-.75V6.563L7.5 13.53a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062L13.438 5.5H10.25a.72.72 0 0 1-.75-.75M2.25 5h4a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4a.74.74 0 0 0-.75.75v10.5c0 .438.313.75.75.75h10.5a.74.74 0 0 0 .75-.75v-4a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v4A2.26 2.26 0 0 1 12.75 20H2.25C1 20 0 19 0 17.75V7.25C0 6.031 1 5 2.25 5' />
    </g>
    <defs>
      <clipPath id='ff8db744b13d9318abe3d8bbd12c2167__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareMdBoldIcon);
export default ForwardRef;
