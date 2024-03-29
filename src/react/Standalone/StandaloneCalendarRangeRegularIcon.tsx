import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCalendarRangeRegularIcon = (
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
    <path d='M11.625 6.5c.313 0 .625.313.625.625V9h7.5V7.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625V9h1.25c1.367 0 2.5 1.133 2.5 2.5V24c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5V11.5c0-1.367 1.094-2.5 2.5-2.5H11V7.125c0-.312.273-.625.625-.625M23.5 14h-15v10c0 .703.547 1.25 1.25 1.25h12.5c.664 0 1.25-.547 1.25-1.25zm-1.25-3.75H9.75c-.703 0-1.25.586-1.25 1.25v1.25h15V11.5c0-.664-.586-1.25-1.25-1.25m0 6.875a.64.64 0 0 1-.625.625h-6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625m-5.625 5.625h-6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625M11 17.125c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625M11.625 19a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.875.35-.547.937-.938 1.64-.938.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.875-.352.585-.938.937-1.602.937m8.75 3.75a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625m1.875-.625c0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.875 0a1.87 1.87 0 0 1-.938-1.64c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.875 0 .546.352.937.938.937 1.602' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCalendarRangeRegularIcon);
export default ForwardRef;
