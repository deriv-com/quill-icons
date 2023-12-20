import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExpandSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.313 4.625c.273.018.419.164.437.438-.018.273-.164.419-.437.437H1.25v3.063c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437v-3.5c.018-.274.164-.42.438-.438zM.374 12.938c.018-.274.164-.42.438-.438.273.018.419.164.437.438V16h3.063c.273.018.419.164.437.438-.018.273-.164.419-.437.437h-3.5c-.274-.018-.42-.164-.438-.437zm11.813-8.313c.273.018.419.164.437.438v3.5c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437V5.5H8.688c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438zm-.438 8.313c.018-.274.164-.42.438-.438.273.018.419.164.437.438v3.5c-.018.273-.164.419-.437.437h-3.5c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h3.062z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandSmRegularIcon);
export default ForwardRef;
