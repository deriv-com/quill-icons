import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
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
    <path d='M3.5 16.5q.039-.585.625-.625h23.75q.585.039.625.625-.039.585-.625.625H4.125q-.586-.039-.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHorizontalRuleRegularIcon);
export default ForwardRef;
