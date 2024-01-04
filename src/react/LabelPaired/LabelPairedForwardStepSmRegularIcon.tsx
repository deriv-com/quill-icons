import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardStepSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.125 5.938c.018-.274.164-.42.438-.438.273.018.419.164.437.438v9.625c-.018.273-.164.419-.438.437-.273-.018-.419-.164-.437-.438v-3.718L2.23 15.836a.69.69 0 0 1-.464.164.742.742 0 0 1-.547-.219.742.742 0 0 1-.219-.547V6.266c0-.22.073-.401.219-.547a.742.742 0 0 1 .547-.219.69.69 0 0 1 .464.164l4.895 3.992V5.937Zm-5.25.574v8.476l5.223-4.238-5.223-4.238Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepSmRegularIcon);
export default ForwardRef;
