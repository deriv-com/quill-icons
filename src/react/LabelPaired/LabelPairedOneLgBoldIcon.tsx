import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedOneLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={30}
    viewBox='0 0 10 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.938 7.688v14.687h3.125c.572.052.885.365.937.938-.052.572-.365.885-.938.937H.938c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h3.125V9.367L1.405 10.97c-.495.26-.924.169-1.289-.274-.234-.52-.13-.95.313-1.289l4.062-2.5c.313-.182.638-.195.977-.039a.89.89 0 0 1 .468.82Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneLgBoldIcon);
export default ForwardRef;
