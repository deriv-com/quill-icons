import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSignalSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M16.438 4.188v13.125c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437V4.188c.018-.274.164-.42.437-.438.273.018.42.164.438.438M12.5 6.374c.273.018.42.164.438.438v10.5c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437v-10.5c.018-.274.164-.42.437-.438M9.438 9.438v7.874c-.019.274-.165.42-.438.438-.273-.018-.42-.164-.437-.437V9.438c.018-.274.164-.42.437-.438.273.018.42.164.438.438M5.5 11.625c.273.018.42.164.438.438v5.25c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437v-5.25c.018-.274.164-.42.437-.438M2 14.25c.273.018.42.164.438.438v2.624c-.019.274-.165.42-.438.438-.273-.018-.42-.164-.437-.437v-2.625c.018-.274.164-.42.437-.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalSmRegularIcon);
export default ForwardRef;
