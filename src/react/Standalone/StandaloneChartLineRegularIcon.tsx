import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartLineRegularIcon = (
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
      d='M7.25 8.375v13.75c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H9.125c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227V8.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625Zm17.305 4.18L18.93 18.18c-.287.26-.573.26-.86 0l-3.32-3.282-3.945 3.907c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l4.375-4.375c.287-.26.573-.26.86 0l3.32 3.282 5.195-5.157c.287-.26.573-.26.86 0 .26.287.26.573 0 .86Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineRegularIcon);
export default ForwardRef;
