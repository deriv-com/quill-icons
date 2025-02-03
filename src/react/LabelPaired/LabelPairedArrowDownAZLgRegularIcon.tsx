import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZLgRegularIcon = (
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
      <path d='m10.68 20.344-3.75 3.75a.66.66 0 0 1-.899 0l-3.75-3.75a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l2.695 2.696V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625v14.766l2.656-2.696a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899m6.367-13.242 2.5 5v.039l.625 1.21a.64.64 0 0 1-.274.86c-.312.156-.703 0-.859-.274L18.61 13h-4.257l-.43.938a.64.64 0 0 1-.86.273.64.64 0 0 1-.273-.86l.625-1.21v-.04l2.5-5c.117-.195.313-.351.586-.351.234 0 .43.156.547.352m-.547 1.68-1.523 2.968h3.007zM14 16.75h5c.234 0 .43.156.547.39a.53.53 0 0 1-.078.626L15.289 23H19c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5q-.41 0-.586-.352c-.078-.195-.078-.468.078-.664L17.672 18H14a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='f34e26e7bc93a6d40c65063e75011d5f__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZLgRegularIcon);
export default ForwardRef;
