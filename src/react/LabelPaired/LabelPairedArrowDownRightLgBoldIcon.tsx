import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownRightLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.813 21.75H3.437c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h7.109l-9.024-9.023c-.364-.443-.364-.886 0-1.329.443-.364.886-.364 1.329 0l9.023 9.024v-7.11c.052-.572.365-.885.938-.937.572.052.885.365.937.938v9.374c-.052.573-.365.886-.938.938Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightLgBoldIcon);
export default ForwardRef;
