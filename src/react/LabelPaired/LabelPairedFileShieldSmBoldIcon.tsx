import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileShieldSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.875 16.438h6.754c.292.4.647.765 1.066 1.093-.237.146-.51.219-.82.219h-7c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h4.54c.473 0 .883.173 1.23.52l2.46 2.46c.347.347.52.766.52 1.258V9.41l-1.312.52V8.125H7.124a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629V5.063H1.875c-.273.018-.42.164-.437.437V16c.018.273.164.42.437.438m9.816-6.508a.581.581 0 0 1 .493 0l3.28 1.312c.256.11.393.31.411.602.018.601-.082 1.276-.3 2.023-.201.748-.566 1.468-1.094 2.16-.547.693-1.313 1.249-2.297 1.668a.581.581 0 0 1-.493 0c-.984-.419-1.75-.975-2.296-1.668-.53-.692-.894-1.412-1.094-2.16-.219-.747-.32-1.422-.301-2.023.018-.292.155-.492.41-.602zm2.844 2.351-2.597-1.039v5.14c.911-.491 1.567-1.12 1.968-1.886.383-.747.593-1.486.63-2.215'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldSmBoldIcon);
export default ForwardRef;
