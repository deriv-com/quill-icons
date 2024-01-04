import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToLineLgBoldIcon = (
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
        d='M14.063 24.25H.937c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h13.124c.573.052.886.365.938.938-.052.572-.365.885-.938.937Zm-7.227-5.313v.04l-5-5.313c-.365-.469-.352-.911.039-1.328.443-.365.885-.352 1.328.039l3.36 3.594V7.688c.052-.573.364-.886.937-.938.573.052.885.365.938.938v8.28l3.398-3.593c.417-.39.86-.404 1.328-.04.365.418.378.847.04 1.29l-5 5.313c-.21.208-.444.312-.704.312a.851.851 0 0 1-.664-.313Z'
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
