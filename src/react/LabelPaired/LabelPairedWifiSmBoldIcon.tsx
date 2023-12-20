import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWifiSmBoldIcon = (
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
        d='M1.344 8.836c-.328.237-.638.219-.93-.055-.237-.328-.219-.638.055-.93a12.878 12.878 0 0 1 3.883-2.378A12.751 12.751 0 0 1 9 4.625c1.64 0 3.19.283 4.648.848a12.878 12.878 0 0 1 3.883 2.379c.274.291.292.601.055.93-.292.273-.602.29-.93.054a11.42 11.42 0 0 0-3.5-2.133c-1.294-.51-2.68-.766-4.156-.766-1.477 0-2.862.256-4.156.766a11.422 11.422 0 0 0-3.5 2.133M9 10.75c-1.805.037-3.336.629-4.594 1.777-.31.256-.62.246-.93-.027-.236-.328-.218-.638.055-.93a7.855 7.855 0 0 1 2.489-1.558A7.75 7.75 0 0 1 9 9.437c1.057 0 2.05.192 2.98.575.93.364 1.76.884 2.489 1.558.273.292.291.602.054.93-.31.273-.62.283-.93.027-1.257-1.148-2.788-1.74-4.593-1.777m1.531 4.594c-.018.583-.273 1.02-.765 1.312-.51.292-1.021.292-1.532 0-.492-.291-.747-.729-.765-1.312.018-.584.273-1.021.765-1.313.51-.291 1.021-.291 1.532 0 .492.292.747.73.765 1.313'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiSmBoldIcon);
export default ForwardRef;
