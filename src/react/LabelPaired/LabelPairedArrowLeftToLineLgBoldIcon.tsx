import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftToLineLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M.25 22.063V8.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v13.124c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938Zm5.313-7.227 5.312-5c.443-.365.872-.352 1.29.039.364.443.35.885-.04 1.328l-3.555 3.36h8.242c.573.052.886.364.938.937-.052.573-.365.885-.938.938H8.57l3.594 3.398c.365.417.378.86.04 1.328-.444.365-.886.378-1.329.04l-5.313-5c-.208-.21-.312-.444-.312-.704 0-.26.104-.482.313-.664Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineLgBoldIcon);
export default ForwardRef;
