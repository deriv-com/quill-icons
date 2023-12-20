import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCopyLgBoldIcon = (
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
        d='M15.25 18.625c.39-.026.599-.234.625-.625v-7.969l-2.656-2.656H7.75c-.39.026-.599.234-.625.625v10c.026.39.234.599.625.625zM7.75 20.5c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V8c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h5.469c.52 0 .963.182 1.328.547l2.656 2.656c.365.365.547.807.547 1.328V18c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742zm-5-10H4v1.875H2.75c-.39.026-.599.234-.625.625v10c.026.39.234.599.625.625h7.5c.39-.026.599-.234.625-.625v-1.25h1.875V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-7.5c-.703-.026-1.29-.273-1.758-.742C.523 24.289.276 23.703.25 23V13c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyLgBoldIcon);
export default ForwardRef;
