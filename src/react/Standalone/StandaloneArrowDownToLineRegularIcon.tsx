import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowDownToLineRegularIcon = (
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
      d='M9.125 25.25c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h13.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H9.125Zm7.305-3.945c-.287.26-.573.26-.86 0l-5-5c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l3.945 3.907V8.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625v10.977l3.945-3.907c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-5 5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownToLineRegularIcon);
export default ForwardRef;
