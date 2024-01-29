import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBarsRegularIcon = (
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
    <path d='M7.25 9.625q.039-.585.625-.625h16.25q.585.039.625.625-.039.585-.625.625H7.875q-.585-.039-.625-.625m0 6.25q.039-.585.625-.625h16.25q.585.039.625.625-.039.585-.625.625H7.875q-.585-.039-.625-.625m17.5 6.25q-.039.585-.625.625H7.875q-.585-.039-.625-.625.039-.585.625-.625h16.25q.585.039.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBarsRegularIcon);
export default ForwardRef;
