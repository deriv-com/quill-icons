import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExpandSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.313 4.625c.273.018.419.164.437.438-.018.273-.164.419-.438.437H1.25v3.063c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438v-3.5c.018-.273.164-.419.438-.437h3.5ZM.374 12.938c.018-.274.164-.42.438-.438.273.018.419.164.437.438V16h3.063c.273.018.419.164.437.438-.018.273-.164.419-.438.437h-3.5c-.273-.018-.419-.164-.437-.438v-3.5Zm11.813-8.313c.273.018.419.164.437.438v3.5c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438V5.5H8.687c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437h3.5Zm-.438 8.313c.018-.274.164-.42.438-.438.273.018.419.164.437.438v3.5c-.018.273-.164.419-.438.437h-3.5c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437h3.062v-3.063Z'
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
