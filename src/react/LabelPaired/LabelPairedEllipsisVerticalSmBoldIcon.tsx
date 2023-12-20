import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisVerticalSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 4 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 13.813c.492.018.875.236 1.148.656.22.437.22.875 0 1.312-.273.42-.656.638-1.148.656-.492-.018-.875-.236-1.148-.656a1.394 1.394 0 0 1 0-1.312c.273-.42.656-.638 1.148-.656m0-4.376c.492.019.875.237 1.148.657.22.437.22.875 0 1.312-.273.42-.656.638-1.148.656-.492-.018-.875-.236-1.148-.656a1.394 1.394 0 0 1 0-1.312c.273-.42.656-.638 1.148-.656m1.313-3.062c-.019.492-.237.875-.657 1.148a1.395 1.395 0 0 1-1.312 0C.924 7.25.706 6.867.687 6.375c.019-.492.237-.875.657-1.148a1.395 1.395 0 0 1 1.312 0c.42.273.638.656.656 1.148'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h4v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalSmBoldIcon);
export default ForwardRef;
