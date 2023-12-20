import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpArrowDownBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='m25.414 21.227-3.75 3.75c-.443.364-.885.364-1.328 0l-3.75-3.75c-.365-.443-.365-.886 0-1.329.443-.364.885-.364 1.328 0l2.148 2.149V8.687c.053-.572.365-.885.938-.937.573.052.885.365.938.938v13.359l2.148-2.149c.443-.364.885-.364 1.328 0 .365.443.365.886 0 1.329M11.664 8.023l3.75 3.75c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0l-2.149-2.149v13.36c-.052.572-.364.885-.937.937-.573-.052-.885-.365-.937-.937v-13.36l-2.149 2.149c-.443.364-.885.364-1.328 0-.365-.443-.365-.886 0-1.329l3.75-3.75c.443-.364.885-.364 1.328 0'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpArrowDownBoldIcon);
export default ForwardRef;
