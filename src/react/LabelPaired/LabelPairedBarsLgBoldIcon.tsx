import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M.25 8.938c.052-.573.365-.886.938-.938h15.624c.573.052.886.365.938.938-.052.572-.365.885-.938.937H1.188C.616 9.823.302 9.51.25 8.937Zm0 6.25c.052-.573.365-.886.938-.938h15.624c.573.052.886.365.938.938-.052.572-.365.885-.938.937H1.188c-.572-.052-.885-.365-.937-.938Zm17.5 6.25c-.052.572-.365.885-.938.937H1.188c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h15.624c.573.052.886.365.938.938Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsLgBoldIcon);
export default ForwardRef;
