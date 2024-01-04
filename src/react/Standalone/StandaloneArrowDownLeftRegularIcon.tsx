import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowDownLeftRegularIcon = (
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
      d='M10.375 22.75c-.39-.026-.599-.234-.625-.625v-8.75c.026-.39.234-.599.625-.625.39.026.599.234.625.625v7.227l10.195-10.157c.287-.26.573-.26.86 0 .26.287.26.573 0 .86L11.898 21.5h7.227c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-8.75Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownLeftRegularIcon);
export default ForwardRef;
