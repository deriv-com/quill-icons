import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPasteLgBoldIcon = (
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
        d='M3.125 9.25H2.5c-.39.026-.599.234-.625.625V20.5c.026.39.234.599.625.625h3.75V23H2.5c-.703-.026-1.29-.273-1.758-.742C.273 21.789.026 21.203 0 20.5V9.875c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h1.602c.078-.547.312-.99.703-1.328.39-.365.872-.547 1.445-.547.573 0 1.055.182 1.445.547.39.338.625.781.703 1.328H10c.599 0 1.12.182 1.563.547.416.338.703.781.859 1.328H10c-.703 0-1.341.17-1.914.508-.547.338-.99.794-1.328 1.367H4.375c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898zm2.5-1.562c.026.39.234.598.625.625.39-.027.599-.235.625-.626-.026-.39-.234-.598-.625-.625-.39.027-.599.235-.625.625M10 23.624h7.5c.39-.026.599-.234.625-.625v-7.5H16.25c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898v-1.875h-5c-.39.026-.599.234-.625.625v10c.026.39.234.599.625.625m7.5 1.875H10c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V13c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h6.094c.52 0 .963.182 1.328.547l2.031 2.031c.365.365.547.807.547 1.328V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteLgBoldIcon);
export default ForwardRef;
