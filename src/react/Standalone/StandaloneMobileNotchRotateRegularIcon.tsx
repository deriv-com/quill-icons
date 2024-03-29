import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMobileNotchRotateRegularIcon = (
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
    <path d='M6 9c0-1.367 1.094-2.5 2.5-2.5H16c1.367 0 2.5 1.133 2.5 2.5v5.781c-.117.04-.195.078-.273.117a2.13 2.13 0 0 0-.977-.78V9c0-.664-.586-1.25-1.25-1.25h-1.25v.625c0 .703-.586 1.25-1.25 1.25H11c-.703 0-1.25-.547-1.25-1.25V7.75H8.5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25h7.773c.274.313.586.664.938.938a2.6 2.6 0 0 1-1.25.312H8.5A2.47 2.47 0 0 1 6 24zm5-1.25v.625h2.5V7.75zm5 8.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625v1.484a5.52 5.52 0 0 1 4.375-2.109c2.344 0 4.375 1.484 5.195 3.516.117.351-.039.703-.351.82-.313.156-.664 0-.82-.352a4.31 4.31 0 0 0-4.024-2.734 4.37 4.37 0 0 0-3.594 1.875h1.719c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.125A.617.617 0 0 1 16 19zm.39 7.11a.607.607 0 0 1 .352-.782c.313-.156.664 0 .82.313.625 1.64 2.227 2.734 4.063 2.734a4.3 4.3 0 0 0 3.555-1.875H23.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625v3.125a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V24.43a5.6 5.6 0 0 1-4.375 2.07c-2.383 0-4.414-1.445-5.234-3.516' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMobileNotchRotateRegularIcon);
export default ForwardRef;
