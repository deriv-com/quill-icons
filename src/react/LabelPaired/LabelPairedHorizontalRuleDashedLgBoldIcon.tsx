import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleDashedLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M0 15.5c0-.508.39-.938.938-.938h2.5a.95.95 0 0 1 .937.938c0 .547-.43.938-.938.938h-2.5c-.546 0-.937-.391-.937-.938Zm6.875 0c0-.508.39-.938.938-.938h2.5a.95.95 0 0 1 .937.938c0 .547-.43.938-.938.938h-2.5c-.546 0-.937-.391-.937-.938Zm6.875 0c0-.508.39-.938.938-.938h2.5a.95.95 0 0 1 .937.938c0 .547-.43.938-.938.938h-2.5c-.546 0-.937-.391-.937-.938Zm6.875 0c0-.508.39-.938.938-.938h2.5A.95.95 0 0 1 25 15.5c0 .547-.43.938-.938.938h-2.5c-.546 0-.937-.391-.937-.938Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedLgBoldIcon);
export default ForwardRef;
