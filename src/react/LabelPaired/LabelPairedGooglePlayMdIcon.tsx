import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedGooglePlayMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='m10.156 11.313 1.875-1.876-8.75-5.03 6.875 6.905ZM1.47 4 9.5 12l-8.031 8c-.438-.23-.667-.594-.688-1.094V5.094c.021-.5.25-.865.688-1.094Zm13.281 7.063a1.1 1.1 0 0 1 .469.937c0 .396-.146.708-.438.938l-1.875 1.093L10.875 12l2.031-2 1.844 1.063Zm-11.469 8.53 6.875-6.905 1.875 1.874-8.75 5.032Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayMdIcon);
export default ForwardRef;
