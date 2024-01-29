import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpArrowDownRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m11.43 7.945 3.75 3.75q.39.43 0 .86-.43.39-.86 0l-2.695-2.657v14.727q-.039.585-.625.625-.585-.039-.625-.625V9.898L7.68 12.555q-.43.39-.86 0-.39-.43 0-.86l3.75-3.75q.43-.39.86 0m13.75 13.36-3.75 3.75q-.43.39-.86 0l-3.75-3.75q-.39-.43 0-.86.43-.39.86 0l2.695 2.657V8.375q.039-.585.625-.625.585.039.625.625v14.727l2.695-2.657q.43-.39.86 0 .39.43 0 .86' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpArrowDownRegularIcon);
export default ForwardRef;
