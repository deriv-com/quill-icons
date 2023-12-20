import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsSmRegularIcon = (
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
        d='M.375 5.938c.018-.274.164-.42.438-.438h11.375c.273.018.419.164.437.438-.018.273-.164.419-.437.437H.813c-.274-.018-.42-.164-.438-.437m0 4.375c.018-.274.164-.42.438-.438h11.375c.273.018.419.164.437.438-.018.273-.164.419-.437.437H.813c-.274-.018-.42-.164-.438-.437m12.25 4.374c-.018.274-.164.42-.437.438H.813c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h11.375c.273.018.419.164.437.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsSmRegularIcon);
export default ForwardRef;
