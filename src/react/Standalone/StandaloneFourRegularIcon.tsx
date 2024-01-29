import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFourRegularIcon = (
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
    <path d='M15.297 8.648 10.14 19h9.609v-6.875q.039-.585.625-.625.585.039.625.625V19h1.875q.585.039.625.625-.039.585-.625.625H21v4.375q-.039.585-.625.625-.585-.039-.625-.625V20.25H9.125a.63.63 0 0 1-.547-.273.66.66 0 0 1 0-.625l5.625-11.25q.274-.508.82-.274.508.313.274.82' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFourRegularIcon);
export default ForwardRef;
