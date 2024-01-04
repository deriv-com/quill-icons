import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowDownRightRegularIcon = (
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
      d='M21.625 22.75h-8.75c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h7.227L9.945 11.305c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0L21 20.602v-7.227c.026-.39.234-.599.625-.625.39.026.599.234.625.625v8.75c-.026.39-.234.599-.625.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownRightRegularIcon);
export default ForwardRef;
