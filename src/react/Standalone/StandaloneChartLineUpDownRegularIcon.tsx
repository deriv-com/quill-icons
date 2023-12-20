import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartLineUpDownRegularIcon = (
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
      d='M7.25 8.375v13.75c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H9.125c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227V8.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625m13.125 1.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h3.75c.39.026.599.234.625.625v3.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-2.227l-5.82 5.782c-.287.26-.573.26-.86 0l-2.695-2.657-3.32 3.282c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l3.75-3.75a.52.52 0 0 1 .43-.195.52.52 0 0 1 .43.195l2.695 2.657 5.352-5.352zm0 11.25c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h2.227l-2.657-2.695.86-.86 2.695 2.657v-2.227c.026-.39.234-.599.625-.625.39.026.599.234.625.625v3.75c-.026.39-.234.599-.625.625z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineUpDownRegularIcon);
export default ForwardRef;
