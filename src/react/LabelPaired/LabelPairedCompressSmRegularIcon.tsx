import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCompressSmRegularIcon = (
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
        d='M4.75 5.063v3.5c-.018.273-.164.419-.438.437h-3.5C.54 8.982.394 8.836.376 8.562c.018-.273.164-.419.438-.437h3.062V5.062c.018-.273.164-.419.438-.437.273.018.419.164.437.438ZM.812 12.5h3.5c.274.018.42.164.438.438v3.5c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438v-3.062H.812c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437Zm8.313-7.438v3.063h3.063c.273.018.419.164.437.438-.018.273-.164.419-.438.437h-3.5c-.273-.018-.419-.164-.437-.438v-3.5c.018-.273.164-.419.438-.437.273.018.419.164.437.438ZM8.687 12.5h3.5c.274.018.42.164.438.438-.018.273-.164.419-.438.437H9.126v3.063c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438v-3.5c.018-.273.164-.419.438-.437Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressSmRegularIcon);
export default ForwardRef;
