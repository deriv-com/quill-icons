import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowRightArrowLeftRegularIcon = (
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
    <path d='m24.555 11.93-3.75 3.75q-.43.39-.86 0-.39-.43 0-.86l2.657-2.695H7.875q-.585-.039-.625-.625.039-.585.625-.625h14.727L19.945 8.18q-.39-.43 0-.86.43-.39.86 0l3.75 3.75q.39.43 0 .86m-13.36 13.75-3.75-3.75q-.39-.43 0-.86l3.75-3.75q.43-.39.86 0 .39.43 0 .86l-2.657 2.695h14.727q.585.039.625.625-.039.585-.625.625H9.398l2.657 2.695q.39.43 0 .86-.43.39-.86 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightArrowLeftRegularIcon);
export default ForwardRef;
