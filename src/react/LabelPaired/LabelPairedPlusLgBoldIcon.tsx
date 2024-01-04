import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M9.938 8.313v6.25h6.25c.572.052.885.364.937.937-.052.573-.365.885-.938.938h-6.25v6.25c-.052.572-.364.885-.937.937-.573-.052-.885-.365-.938-.938v-6.25h-6.25c-.572-.052-.885-.364-.937-.937.052-.573.365-.885.938-.938h6.25v-6.25c.052-.572.364-.885.937-.937.573.052.885.365.938.938Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusLgBoldIcon);
export default ForwardRef;
