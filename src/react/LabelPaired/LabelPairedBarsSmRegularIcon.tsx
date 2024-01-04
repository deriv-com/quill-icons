import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M.375 5.938c.018-.274.164-.42.438-.438h11.374c.274.018.42.164.438.438-.018.273-.164.419-.438.437H.813c-.274-.018-.42-.164-.438-.438Zm0 4.375c.018-.274.164-.42.438-.438h11.374c.274.018.42.164.438.438-.018.273-.164.419-.438.437H.813c-.274-.018-.42-.164-.438-.438Zm12.25 4.374c-.018.274-.164.42-.438.438H.813c-.274-.018-.42-.164-.438-.438.018-.273.164-.419.438-.437h11.374c.274.018.42.164.438.438Z'
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
