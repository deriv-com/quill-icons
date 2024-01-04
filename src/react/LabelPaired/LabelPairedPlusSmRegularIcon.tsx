import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M6.938 5.5v4.813h4.812c.273.018.42.164.438.437-.019.273-.165.42-.438.438H6.937V16c-.018.273-.164.42-.437.438-.273-.019-.42-.165-.438-.438v-4.813H1.25c-.273-.018-.42-.164-.438-.437.019-.273.165-.42.438-.438h4.813V5.5c.018-.273.164-.42.437-.438.273.019.42.165.438.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusSmRegularIcon);
export default ForwardRef;
