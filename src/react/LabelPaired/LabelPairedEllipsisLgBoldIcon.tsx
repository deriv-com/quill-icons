import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisLgBoldIcon = (
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
        d='M17.125 15.5c-.026.703-.338 1.25-.937 1.64-.625.313-1.25.313-1.875 0-.6-.39-.912-.937-.938-1.64.026-.703.338-1.25.938-1.64.624-.313 1.25-.313 1.874 0 .6.39.912.937.938 1.64m-6.25 0c-.026.703-.338 1.25-.937 1.64-.626.313-1.25.313-1.876 0-.598-.39-.911-.937-.937-1.64.026-.703.339-1.25.938-1.64.624-.313 1.25-.313 1.874 0 .6.39.912.937.938 1.64M2.75 17.375c-.703-.026-1.25-.338-1.64-.937-.313-.625-.313-1.25 0-1.875.39-.6.937-.912 1.64-.938.703.026 1.25.338 1.64.938.313.624.313 1.25 0 1.874-.39.6-.937.912-1.64.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisLgBoldIcon);
export default ForwardRef;
