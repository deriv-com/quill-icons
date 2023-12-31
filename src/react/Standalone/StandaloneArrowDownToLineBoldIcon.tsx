import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowDownToLineBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M22.563 25.25H9.438c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h13.125c.572.052.885.365.937.938-.052.572-.365.885-.937.937m-7.227-5.312v.039l-5-5.313c-.365-.469-.352-.911.039-1.328.443-.365.885-.352 1.328.039l3.36 3.594V8.687c.052-.572.364-.885.937-.937.573.052.885.365.938.938v8.28l3.398-3.593c.417-.39.86-.404 1.328-.04.365.418.378.847.04 1.29l-5 5.313c-.21.208-.444.312-.704.312a.851.851 0 0 1-.664-.312' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownToLineBoldIcon);
export default ForwardRef;
