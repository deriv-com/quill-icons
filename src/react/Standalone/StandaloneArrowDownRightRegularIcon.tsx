import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownRightRegularIcon = (
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
    <path d='M21.625 22.75h-8.75q-.585-.039-.625-.625.039-.585.625-.625h7.227L9.945 11.305q-.39-.43 0-.86.43-.39.86 0L21 20.602v-7.227q.039-.585.625-.625.585.039.625.625v8.75q-.039.585-.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownRightRegularIcon);
export default ForwardRef;
