import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpRightRegularIcon = (
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
    <path d='M21.625 10.25q.585.039.625.625v8.75q-.039.585-.625.625-.585-.039-.625-.625v-7.227L10.805 22.555q-.43.39-.86 0-.39-.43 0-.86L20.102 11.5h-7.227q-.585-.039-.625-.625.039-.585.625-.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRightRegularIcon);
export default ForwardRef;
