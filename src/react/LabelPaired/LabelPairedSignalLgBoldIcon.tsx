import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSignalLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M22.5 5.5c.573.052.885.365.938.938v18.125c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938V6.438c.053-.572.365-.885.938-.937Zm-5 3.75c.573.052.885.365.938.938v14.374c-.053.573-.365.886-.938.938-.573-.052-.885-.365-.938-.938V10.188c.053-.572.365-.885.938-.937Zm-5 3.75c.573.052.885.365.938.938v10.624c-.053.573-.365.886-.938.938-.573-.052-.885-.365-.938-.938V13.938c.053-.572.365-.885.938-.937Zm-5 3.75c.573.052.885.365.938.938v6.875c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938v-6.875c.053-.572.365-.885.938-.937Zm-5 3.75c.573.052.885.365.938.938v3.125c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938v-3.125c.053-.572.365-.885.938-.937Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalLgBoldIcon);
export default ForwardRef;
