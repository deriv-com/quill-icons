import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpRightMdFillIcon = (
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
      <path d='M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m11.5 2V9.25a.76.76 0 0 0-.75-.75h-5a.74.74 0 0 0-.75.75c0 .438.313.75.75.75l3.188.031-4.22 4.219a.684.684 0 0 0 0 1.031c.282.313.75.313 1.063 0L10 11.062V14c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75' />
    </g>
    <defs>
      <clipPath id='0bca54ecb9988e1d1f4a9808d6918fb0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpRightMdFillIcon);
export default ForwardRef;
