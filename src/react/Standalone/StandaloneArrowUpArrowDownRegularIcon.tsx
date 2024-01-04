import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpArrowDownRegularIcon = (
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
      d='m11.43 7.945 3.75 3.75c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-2.695-2.657v14.727c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V9.898L7.68 12.555c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l3.75-3.75c.287-.26.573-.26.86 0Zm13.75 13.36-3.75 3.75c-.287.26-.573.26-.86 0l-3.75-3.75c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l2.695 2.657V8.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625v14.727l2.695-2.657c.287-.26.573-.26.86 0 .26.287.26.573 0 .86Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpArrowDownRegularIcon);
export default ForwardRef;
