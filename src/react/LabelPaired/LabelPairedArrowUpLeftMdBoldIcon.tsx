import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 7v.031h7.5a.74.74 0 0 1 .75.75.76.76 0 0 1-.75.75H3.531l7.219 7.219a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0L2.5 9.563v5.687a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-7.5A.74.74 0 0 1 1.75 7' />
    </g>
    <defs>
      <clipPath id='4061756ad2f56ed7b41c547ded7a3b5a__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftMdBoldIcon);
export default ForwardRef;
