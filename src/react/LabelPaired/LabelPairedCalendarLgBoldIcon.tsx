import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCalendarLgBoldIcon = (
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
        d='M6.188 6.438V8h5.625V6.438c.052-.573.364-.886.937-.938.573.052.885.365.938.938V8h1.562c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742C.523 24.289.276 23.703.25 23V10.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h1.563V6.438c.052-.573.364-.886.937-.938.573.052.885.365.938.938M2.125 13v10c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625V13z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarLgBoldIcon);
export default ForwardRef;
