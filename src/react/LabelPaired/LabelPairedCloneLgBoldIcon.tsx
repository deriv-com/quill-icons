import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCloneLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.5 23.625h8.75c.39-.026.599-.234.625-.625v-2.5h1.875V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.5c-.703-.026-1.29-.273-1.758-.742C.273 24.289.026 23.703 0 23v-8.75c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H5v1.875H2.5c-.39.026-.599.234-.625.625V23c.026.39.234.599.625.625m6.25-6.25h8.75c.39-.026.599-.234.625-.625V8c-.026-.39-.234-.599-.625-.625H8.75c-.39.026-.599.234-.625.625v8.75c.026.39.234.599.625.625m-2.5-.625V8c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h8.75c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v8.75c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H8.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneLgBoldIcon);
export default ForwardRef;
