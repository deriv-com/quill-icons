import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpToLineRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M9.125 7.75h13.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H9.125c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Zm7.305 3.945 5 5c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-3.945-3.907v10.977c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V13.648l-3.945 3.907c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l5-5c.287-.26.573-.26.86 0Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpToLineRegularIcon);
export default ForwardRef;
