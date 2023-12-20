import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpAZLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M16.5 6.75c.39 0 .677.17.86.508l3.124 6.25c.183.547.04.976-.43 1.289-.546.182-.963.039-1.25-.43l-.546-1.055H14.743l-.548 1.055c-.286.495-.703.638-1.25.43-.495-.313-.638-.742-.43-1.29l3.126-6.25a1.08 1.08 0 0 1 .859-.507m-.82 4.688h1.64l-.82-1.641zM5.836 7.023c.443-.364.885-.364 1.328 0l3.75 3.75c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0L7.437 9.953v13.36c-.052.572-.364.885-.937.937-.573-.052-.885-.365-.937-.937V9.953l-2.149 2.149c-.443.364-.885.364-1.328 0-.365-.443-.365-.886 0-1.329zM14 16.75h5c.39.026.677.208.86.547.156.364.104.703-.157 1.015l-3.633 4.063H19c.573.052.885.365.938.938-.053.572-.365.885-.938.937h-5a.991.991 0 0 1-.86-.547c-.156-.364-.104-.703.157-1.015l3.633-4.063H14c-.573-.052-.885-.365-.937-.937.052-.573.364-.886.937-.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZLgBoldIcon);
export default ForwardRef;
