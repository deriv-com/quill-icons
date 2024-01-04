import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardStepLgBoldIcon = (
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
        d='M3.375 8.938v4.101l6.914-4.844c.182-.13.404-.195.664-.195.339 0 .612.117.82.352.235.208.352.481.352.82v12.656c0 .339-.117.612-.352.82-.208.235-.481.352-.82.352-.234 0-.456-.065-.664-.195L3.375 17.96v4.102c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V8.938c.052-.572.365-.885.938-.937.572.052.885.365.937.938Zm0 6.718L10.25 20.5v-9.96l-6.875 4.804v.312Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepLgBoldIcon);
export default ForwardRef;
