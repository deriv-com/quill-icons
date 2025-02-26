import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.93 6.945 3.75 3.75a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L7.125 8.898v14.727a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8.898L3.18 11.594a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l3.75-3.75a.66.66 0 0 1 .899 0M14 16.75h5c.234 0 .43.156.547.39a.53.53 0 0 1-.078.626L15.289 23H19c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5q-.41 0-.586-.352c-.117-.195-.078-.468.078-.664L17.672 18H14a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m2.5-10c.234 0 .43.156.547.352l2.5 5v.039l.625 1.21a.64.64 0 0 1-.274.86.64.64 0 0 1-.859-.274L18.61 13h-4.257l-.43.938a.64.64 0 0 1-.86.273c-.273-.156-.43-.547-.273-.86l.625-1.21v-.04l2.5-5c.117-.195.313-.351.586-.351m-1.523 5h3.007L16.5 8.781z' />
    </g>
    <defs>
      <clipPath id='1782246011c4e30e3e3b89a4e979661d__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZLgRegularIcon);
export default ForwardRef;
