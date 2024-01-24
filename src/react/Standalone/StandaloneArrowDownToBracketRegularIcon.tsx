import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowDownToBracketRegularIcon = (
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
    <path d='m21.43 15.055-5 5q-.43.39-.86 0l-5-5q-.39-.43 0-.86.43-.39.86 0l3.945 3.907V7.125q.039-.585.625-.625.585.039.625.625v10.977l3.945-3.907q.43-.39.86 0 .39.43 0 .86M8.5 19.625v3.75q.039.78.547 1.328.546.508 1.328.547h11.25q.78-.039 1.328-.547.508-.546.547-1.328v-3.75q.039-.585.625-.625.585.039.625.625v3.75q-.04 1.328-.898 2.227-.9.858-2.227.898h-11.25q-1.328-.04-2.227-.898-.859-.9-.898-2.227v-3.75q.039-.585.625-.625.585.039.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownToBracketRegularIcon);
export default ForwardRef;
