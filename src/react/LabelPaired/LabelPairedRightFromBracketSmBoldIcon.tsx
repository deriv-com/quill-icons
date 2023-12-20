import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedRightFromBracketSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.625 7.742V9.22c-.036.4-.255.62-.656.656H5.688v1.75h3.28c.402.037.62.255.657.656v1.477l3.008-3.008zM14 10.75c0 .328-.118.61-.355.848l-3.172 3.144a1.178 1.178 0 0 1-.903.383c-.346 0-.638-.128-.875-.383a1.29 1.29 0 0 1-.383-.875v-.93H5.688a1.427 1.427 0 0 1-.93-.382 1.427 1.427 0 0 1-.383-.93v-1.75c.018-.365.146-.674.383-.93.255-.237.565-.364.93-.383h2.625v-.93a1.29 1.29 0 0 1 .382-.874 1.29 1.29 0 0 1 .875-.383c.365 0 .666.128.903.383l3.172 3.144c.237.237.355.52.355.848M4.594 5.938H2.406c-.31 0-.565.109-.765.328a.993.993 0 0 0-.328.765v7.438c0 .31.109.565.328.765.2.22.455.329.765.329h2.188c.4.036.62.255.656.656-.036.4-.255.62-.656.656H2.406c-.674-.018-1.24-.255-1.695-.71-.456-.457-.693-1.022-.711-1.696V7.03c.018-.674.255-1.24.71-1.695.457-.456 1.022-.693 1.696-.711h2.188c.4.036.62.255.656.656-.036.401-.255.62-.656.657'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketSmBoldIcon);
export default ForwardRef;
