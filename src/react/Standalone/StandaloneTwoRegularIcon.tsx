import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneTwoRegularIcon = (
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
      d='M15.531 9c-1.172.026-2.174.443-3.008 1.25l-1.093 1.055c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l1.055-1.093c1.094-1.042 2.396-1.576 3.906-1.602 1.537.026 2.826.56 3.867 1.602 1.016 1.015 1.55 2.291 1.602 3.828-.026 1.562-.599 2.877-1.719 3.945L11.977 24h9.648c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-11.25c-.287 0-.482-.13-.586-.39a.701.701 0 0 1 .156-.704l8.477-7.93c.86-.833 1.302-1.848 1.328-3.046-.026-1.172-.443-2.162-1.25-2.97-.781-.78-1.77-1.184-2.969-1.21Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTwoRegularIcon);
export default ForwardRef;
