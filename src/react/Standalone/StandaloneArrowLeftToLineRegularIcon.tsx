import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowLeftToLineRegularIcon = (
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
      d='M7.25 23.375V9.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v13.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625m3.945-7.305 5-5c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-3.907 3.945h10.977c.39.026.599.234.625.625-.026.39-.234.599-.625.625H13.148l3.907 3.945c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-5-5c-.26-.287-.26-.573 0-.86'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowLeftToLineRegularIcon);
export default ForwardRef;
