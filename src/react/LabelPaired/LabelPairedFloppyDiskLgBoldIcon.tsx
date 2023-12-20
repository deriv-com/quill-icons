import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFloppyDiskLgBoldIcon = (
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
        d='M2.125 9.25v12.5c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625v-9.57a.64.64 0 0 0-.195-.47l1.328-1.327c.495.495.742 1.094.742 1.797v9.57c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h9.61c.677 0 1.262.247 1.757.742l2.89 2.89-1.327 1.329-2.89-2.89a32.4 32.4 0 0 1-.04-.04v3.906c-.052.573-.365.886-.937.938h-7.5c-.573-.052-.886-.365-.938-.937V8.625H2.75c-.39.026-.599.234-.625.625m3.125-.625v3.125h5.625V8.625zM6.5 18c.026-.937.443-1.654 1.25-2.148.833-.47 1.667-.47 2.5 0 .807.494 1.224 1.21 1.25 2.148-.026.938-.443 1.654-1.25 2.148-.833.47-1.667.47-2.5 0-.807-.494-1.224-1.21-1.25-2.148'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskLgBoldIcon);
export default ForwardRef;
