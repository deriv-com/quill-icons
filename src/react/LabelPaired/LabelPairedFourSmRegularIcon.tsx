import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFourSmRegularIcon = (
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
        d='M5.008 5.254 1.398 12.5h6.727V7.688c.018-.274.164-.42.438-.438.273.018.419.164.437.438V12.5h1.313c.273.018.419.164.437.438-.018.273-.164.419-.437.437H9v3.063c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437v-3.063H.688a.444.444 0 0 1-.383-.191.465.465 0 0 1 0-.438l3.937-7.875c.128-.237.32-.3.574-.191.237.146.301.337.192.574'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourSmRegularIcon);
export default ForwardRef;
