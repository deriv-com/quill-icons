import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSignalSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M16.438 4.188v13.125c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.438-.438V4.188c.019-.273.165-.419.438-.437.273.018.42.164.438.438ZM12.5 6.374c.273.018.42.164.438.438v10.5c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.438-.438v-10.5c.019-.273.165-.419.438-.437ZM9.437 9.438v7.874c-.018.274-.164.42-.437.438-.273-.018-.42-.164-.438-.438V9.438c.019-.273.165-.419.438-.437.273.018.42.164.438.438ZM5.5 11.624c.273.018.42.164.438.438v5.25c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.438-.438v-5.25c.019-.273.165-.419.438-.437ZM2 14.25c.273.018.42.164.438.438v2.624c-.019.274-.165.42-.438.438-.273-.018-.42-.164-.438-.438v-2.625c.019-.273.165-.419.438-.437Z'
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
