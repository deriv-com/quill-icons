import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneHorizontalRuleRegularIcon = (
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
      d='M3.5 16.5c.026-.39.234-.599.625-.625h23.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H4.125c-.39-.026-.599-.234-.625-.625'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHorizontalRuleRegularIcon);
export default ForwardRef;
