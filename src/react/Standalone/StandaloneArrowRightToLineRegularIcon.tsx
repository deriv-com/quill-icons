import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowRightToLineRegularIcon = (
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
    <path d='M24.75 9.625v13.75q-.039.585-.625.625-.585-.039-.625-.625V9.625q.039-.585.625-.625.585.039.625.625m-3.945 7.305-5 5q-.43.39-.86 0-.39-.43 0-.86l3.907-3.945H7.875q-.585-.039-.625-.625.039-.585.625-.625h10.977l-3.907-3.945q-.39-.43 0-.86.43-.39.86 0l5 5q.39.43 0 .86' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightToLineRegularIcon);
export default ForwardRef;
