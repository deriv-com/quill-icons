import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCompressSmRegularIcon = (
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
        d='M4.75 5.063v3.5c-.018.273-.164.419-.437.437h-3.5c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h3.062V5.063c.018-.274.164-.42.438-.438.273.018.419.164.437.438M.813 12.5h3.5c.273.018.419.164.437.438v3.5c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437v-3.063H.813c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438m8.312-7.437v3.062h3.063c.273.018.419.164.437.438-.018.273-.164.419-.437.437h-3.5c-.274-.018-.42-.164-.438-.437v-3.5c.018-.274.164-.42.438-.438.273.018.419.164.437.438M8.688 12.5h3.5c.273.018.419.164.437.438-.018.273-.164.419-.437.437H9.125v3.063c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437v-3.5c.018-.274.164-.42.438-.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressSmRegularIcon);
export default ForwardRef;
