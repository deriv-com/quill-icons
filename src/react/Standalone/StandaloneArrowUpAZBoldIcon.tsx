import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpAZBoldIcon = (
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
      d='M21 7.75c.39 0 .677.17.86.508l3.124 6.25c.183.547.04.976-.43 1.289-.546.182-.963.039-1.25-.43l-.546-1.055H19.243l-.548 1.055c-.286.495-.703.638-1.25.43-.494-.313-.638-.742-.43-1.29l3.126-6.25A1.08 1.08 0 0 1 21 7.75m-.82 4.688h1.64L21 10.797zm-9.844-4.415c.443-.364.885-.364 1.328 0l3.75 3.75c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0l-2.149-2.149v13.36c-.052.572-.364.885-.937.937-.573-.052-.885-.365-.937-.937v-13.36l-2.149 2.149c-.443.364-.885.364-1.328 0-.365-.443-.365-.886 0-1.329zM18.5 17.75h5c.39.026.677.208.86.547.156.364.104.703-.157 1.015l-3.633 4.063h2.93c.573.052.885.365.938.938-.053.572-.365.885-.938.937h-5a.991.991 0 0 1-.86-.547c-.156-.364-.104-.703.157-1.015l3.633-4.063H18.5c-.573-.052-.885-.365-.937-.937.052-.573.364-.886.937-.938'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpAZBoldIcon);
export default ForwardRef;
