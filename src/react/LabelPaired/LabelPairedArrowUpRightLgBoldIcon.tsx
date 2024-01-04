import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpRightLgBoldIcon = (
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
        d='M12.813 9.25c.572.052.885.365.937.938v9.374c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938v-7.109l-9.023 9.024c-.443.364-.886.364-1.329 0-.364-.443-.364-.886 0-1.329l9.024-9.023h-7.11c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h9.374Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightLgBoldIcon);
export default ForwardRef;
