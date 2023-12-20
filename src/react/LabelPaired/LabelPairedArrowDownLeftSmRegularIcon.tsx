import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownLeftSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.563 15.125c-.274-.018-.42-.164-.438-.437V8.561c.018-.273.164-.419.438-.437.273.018.419.164.437.438v5.058l7.137-7.11c.2-.182.4-.182.601 0 .183.201.183.402 0 .602l-7.11 7.137h5.06c.273.018.419.164.437.438-.018.273-.164.419-.437.437z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftSmRegularIcon);
export default ForwardRef;
