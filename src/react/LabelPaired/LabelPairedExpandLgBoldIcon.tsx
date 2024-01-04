import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExpandLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M5.563 6.75c.572.052.885.365.937.938-.052.572-.365.885-.938.937H2.126v3.438c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V7.689c.052-.573.365-.886.938-.938h4.375ZM.25 18.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v3.437h3.438c.572.052.885.365.937.938-.052.572-.365.885-.938.937H1.188c-.572-.052-.885-.365-.937-.938v-4.375ZM16.813 6.75c.572.052.885.365.937.938v4.375c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V8.626h-3.438c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h4.374Zm-.938 12.188c.052-.573.365-.886.938-.938.572.052.885.365.937.938v4.375c-.052.572-.365.885-.938.937h-4.375c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h3.437v-3.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandLgBoldIcon);
export default ForwardRef;
