import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEnvelopeLgBoldIcon = (
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
        d='M2.5 9.875c-.39.026-.599.234-.625.625v.86l6.758 5.546c.416.313.872.469 1.367.469.52 0 .99-.156 1.406-.469l6.719-5.547V10.5c-.026-.39-.234-.599-.625-.625zm-.625 3.906V20.5c.026.39.234.599.625.625h15c.39-.026.599-.234.625-.625v-6.719l-5.547 4.57c-.781.6-1.64.899-2.578.899-.937 0-1.797-.3-2.578-.898zM0 10.5c.026-.703.273-1.29.742-1.758C1.211 8.273 1.797 8.026 2.5 8h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742C.273 21.789.026 21.203 0 20.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeLgBoldIcon);
export default ForwardRef;
