import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightFromSquareLgRegularIcon = (
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
        d='M13.125 5.5h6.25c.39.026.599.234.625.625v6.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.648L9.18 17.18c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l9.532-9.57h-4.727c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625M2.5 6.75h5.625c.39.026.599.234.625.625-.026.39-.234.599-.625.625H2.5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898V23c0 .365.117.664.352.898.234.235.533.352.898.352h13.75c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-5.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.5c-.703-.026-1.29-.273-1.758-.742C.273 24.289.026 23.703 0 23V9.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareLgRegularIcon);
export default ForwardRef;
