import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedOneSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 7 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.938 5.063V16h2.625c.273.018.419.164.437.438-.018.273-.164.419-.437.437H.438c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h2.625V5.883L1.12 7.168c-.237.128-.437.091-.601-.11-.128-.236-.092-.437.109-.601l2.625-1.75a.47.47 0 0 1 .465-.027.428.428 0 0 1 .219.383'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneSmRegularIcon);
export default ForwardRef;
