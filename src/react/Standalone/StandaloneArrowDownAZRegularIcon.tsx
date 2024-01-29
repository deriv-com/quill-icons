import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownAZRegularIcon = (
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
    <path d='m15.18 21.305-3.75 3.75q-.43.39-.86 0l-3.75-3.75q-.39-.43 0-.86.43-.39.86 0l2.695 2.657V8.375q.039-.585.625-.625.585.039.625.625v14.727l2.695-2.657q.43-.39.86 0 .39.43 0 .86m6.367-13.203 2.5 4.96v.04l.625 1.25q.234.507-.274.82-.547.234-.82-.274L23.11 14h-4.218l-.47.898q-.31.508-.82.274-.508-.274-.273-.82l.586-1.25h.04l2.5-5A.55.55 0 0 1 21 7.75q.39 0 .547.352M21 9.782l-1.484 2.968h2.968zm-2.5 7.968h5q.39 0 .547.352a.67.67 0 0 1-.04.664L19.79 24H23.5q.585.039.625.625-.039.585-.625.625h-5a.55.55 0 0 1-.547-.352.62.62 0 0 1 .078-.664L22.211 19H18.5q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownAZRegularIcon);
export default ForwardRef;
