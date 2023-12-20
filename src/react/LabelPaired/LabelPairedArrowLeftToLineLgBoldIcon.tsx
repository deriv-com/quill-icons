import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftToLineLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 22.063V8.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v13.125c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937m5.313-7.227 5.312-5c.443-.365.872-.352 1.29.039.364.443.35.885-.04 1.328l-3.555 3.36h8.242c.573.052.886.364.938.937-.052.573-.365.885-.937.938H8.57l3.594 3.398c.365.417.378.86.04 1.328-.444.365-.886.378-1.329.04l-5.312-5c-.209-.21-.313-.444-.313-.704 0-.26.104-.482.313-.664'
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
