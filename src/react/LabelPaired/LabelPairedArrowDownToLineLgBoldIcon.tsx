import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownToLineLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.063 24.25H.938c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h13.125c.572.052.885.365.937.938-.052.572-.365.885-.937.937m-7.227-5.312v.039l-5-5.313c-.365-.469-.352-.911.039-1.328.443-.365.885-.352 1.328.039l3.36 3.594V7.688c.052-.573.364-.886.937-.938.573.052.885.365.938.938v8.28l3.398-3.593c.417-.39.86-.404 1.328-.04.365.418.378.847.04 1.29l-5 5.313c-.21.208-.444.312-.704.312a.851.851 0 0 1-.664-.312'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineLgBoldIcon);
export default ForwardRef;
