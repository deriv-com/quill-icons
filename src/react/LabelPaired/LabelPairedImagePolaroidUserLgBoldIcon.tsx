import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedImagePolaroidUserLgBoldIcon = (
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
        d='M2.125 21.75c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625v-1.875H2.125zM13.297 18h2.578V9.25c-.026-.39-.234-.599-.625-.625H2.75c-.39.026-.599.234-.625.625V18h2.578c.156-.547.443-.99.86-1.328a2.382 2.382 0 0 1 1.562-.547h3.75c.599 0 1.12.182 1.563.547.416.338.703.781.859 1.328m4.453-8.75v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758M6.5 12.375c.026-.937.443-1.654 1.25-2.148.833-.47 1.667-.47 2.5 0 .807.494 1.224 1.21 1.25 2.148-.026.938-.443 1.654-1.25 2.148-.833.47-1.667.47-2.5 0-.807-.494-1.224-1.21-1.25-2.148'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserLgBoldIcon);
export default ForwardRef;
