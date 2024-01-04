import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMinusLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M17.125 15.5c-.052.573-.365.885-.938.938H1.813c-.572-.053-.885-.365-.937-.938.052-.573.365-.885.938-.938h14.374c.573.053.886.365.938.938Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusLgBoldIcon);
export default ForwardRef;
