import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTriangleExclamationMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.75 6.625 1.562 16.813a.444.444 0 0 0-.062.25c.02.27.177.416.469.437h12.094c.27-.02.416-.167.437-.438a.554.554 0 0 0-.063-.25L8.25 6.626A.297.297 0 0 0 8 6.5a.297.297 0 0 0-.25.125Zm-1.281-.781C6.844 5.302 7.354 5.02 8 5c.667.02 1.177.302 1.531.844L15.72 16.03c.187.313.281.657.281 1.032-.02.541-.208 1-.563 1.375a2.049 2.049 0 0 1-1.374.562H1.969c-.563-.02-1.032-.208-1.407-.563A2.049 2.049 0 0 1 0 17.063c0-.375.094-.718.281-1.03L6.47 5.843ZM9 15.5a.974.974 0 0 1-.281.719A.974.974 0 0 1 8 16.5a.974.974 0 0 1-.719-.281A.974.974 0 0 1 7 15.5c0-.292.094-.531.281-.719A.974.974 0 0 1 8 14.5c.292 0 .531.094.719.281A.974.974 0 0 1 9 15.5Zm-.25-5.75v3c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-3c.042-.458.292-.708.75-.75.458.042.708.292.75.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationMdBoldIcon);
export default ForwardRef;
