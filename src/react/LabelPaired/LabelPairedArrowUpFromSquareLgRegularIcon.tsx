import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.43 5.695 4.062 4.063a.66.66 0 0 1 0 .898.66.66 0 0 1-.898 0l-2.969-3.008V18a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V7.648l-3.008 3.008a.66.66 0 0 1-.898 0 .66.66 0 0 1 0-.898L9.53 5.695a.66.66 0 0 1 .899 0M2.5 6.75h1.25c.313 0 .625.313.625.625A.64.64 0 0 1 3.75 8H2.5c-.703 0-1.25.586-1.25 1.25V23c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25V9.25c0-.664-.586-1.25-1.25-1.25h-1.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h1.25c1.367 0 2.5 1.133 2.5 2.5V23c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 0 23V9.25c0-1.367 1.094-2.5 2.5-2.5' />
    </g>
    <defs>
      <clipPath id='25702c23348952b92a61c41c902c8e24__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareLgRegularIcon);
export default ForwardRef;
