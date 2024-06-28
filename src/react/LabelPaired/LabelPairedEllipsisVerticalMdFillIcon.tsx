import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={4}
    height={24}
    viewBox='0 0 4 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 15.25c.625 0 1.188.344 1.5.875.313.563.313 1.219 0 1.75a1.68 1.68 0 0 1-1.5.875c-.656 0-1.219-.312-1.531-.875-.313-.531-.313-1.187 0-1.75A1.76 1.76 0 0 1 2 15.25m0-5c.625 0 1.188.344 1.5.875.313.563.313 1.219 0 1.75a1.68 1.68 0 0 1-1.5.875c-.656 0-1.219-.312-1.531-.875-.313-.531-.313-1.187 0-1.75A1.76 1.76 0 0 1 2 10.25M3.75 7a1.76 1.76 0 0 1-.875 1.531c-.562.313-1.219.313-1.75 0C.563 8.22.25 7.656.25 7c0-.625.313-1.187.875-1.5.531-.312 1.188-.312 1.75 0 .531.313.875.875.875 1.5' />
    </g>
    <defs>
      <clipPath id='3b7e0ed3f08a7d64078ee5451c82fa4e__a'>
        <path d='M0 0h4v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalMdFillIcon);
export default ForwardRef;
