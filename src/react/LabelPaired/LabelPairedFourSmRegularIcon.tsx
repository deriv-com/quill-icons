import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFourSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.008 5.254 1.398 12.5h6.727V7.687c.018-.273.164-.419.438-.437.273.018.419.164.437.438V12.5h1.313c.273.018.419.164.437.438-.018.273-.164.419-.438.437H9v3.063c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438v-3.062H.687a.444.444 0 0 1-.382-.191.465.465 0 0 1 0-.438l3.937-7.875c.128-.237.32-.3.574-.191.237.146.301.337.192.574Z'
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
