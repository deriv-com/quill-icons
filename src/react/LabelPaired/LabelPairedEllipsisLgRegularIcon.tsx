import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.5 15.5q0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352Q14 16.048 14 15.5q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898m-6.25 0q0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898m-7.5 1.25q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352' />
    </g>
    <defs>
      <clipPath id='ddf72c1512ccbca63e473074486d1a03__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisLgRegularIcon);
export default ForwardRef;
