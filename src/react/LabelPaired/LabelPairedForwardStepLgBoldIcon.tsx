import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardStepLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.625 8.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v13.125c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938v-4.101l-6.914 4.844c-.208.13-.43.195-.664.195-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82V9.172c0-.339.117-.612.352-.82.208-.235.481-.352.82-.352.26 0 .482.065.664.195l6.914 4.844V8.938Zm0 6.718v-.312L2.75 10.539V20.5l6.875-4.844Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepLgBoldIcon);
export default ForwardRef;
