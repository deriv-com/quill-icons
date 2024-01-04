import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpRightFromSquareLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.875 6.438c.052-.573.365-.886.938-.938h6.25c.572.052.885.365.937.938v6.25c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V8.704l-8.71 8.711c-.444.365-.886.365-1.33 0-.364-.443-.364-.885 0-1.328l8.712-8.711h-3.985c-.572-.052-.885-.365-.937-.938Zm-9.063.312h5c.573.052.886.365.938.938-.052.572-.365.885-.938.937h-5c-.572.052-.885.365-.937.938v13.124c.052.573.365.886.938.938h13.124c.573-.052.886-.365.938-.938v-5c.052-.572.365-.885.938-.937.572.052.885.365.937.938v5c-.026.807-.3 1.47-.82 1.992-.521.52-1.185.794-1.992.82H2.812c-.807-.026-1.47-.3-1.992-.82-.52-.521-.794-1.185-.82-1.992V9.563C.026 8.755.3 8.09.82 7.57c.521-.52 1.185-.794 1.993-.82Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareLgBoldIcon);
export default ForwardRef;
