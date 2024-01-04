import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpArrowDownLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m20.914 20.227-3.75 3.75c-.443.364-.885.364-1.328 0l-3.75-3.75c-.365-.443-.365-.886 0-1.329.443-.364.885-.364 1.328 0l2.149 2.149V7.687c.052-.572.364-.885.937-.937.573.052.885.365.938.938v13.359l2.148-2.149c.443-.364.885-.364 1.328 0 .365.443.365.886 0 1.329ZM7.164 7.023l3.75 3.75c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0L7.437 9.953v13.36c-.052.572-.364.885-.937.937-.573-.052-.885-.365-.938-.938V9.954l-2.148 2.149c-.443.364-.885.364-1.328 0-.365-.443-.365-.886 0-1.329l3.75-3.75c.443-.364.885-.364 1.328 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownLgBoldIcon);
export default ForwardRef;
