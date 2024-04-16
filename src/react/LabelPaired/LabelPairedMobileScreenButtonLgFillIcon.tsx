import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.625 8c0-1.367 1.094-2.5 2.5-2.5h8.75c1.367 0 2.5 1.133 2.5 2.5v15c0 1.406-1.133 2.5-2.5 2.5h-8.75a2.47 2.47 0 0 1-2.5-2.5zm5 15c0 .352.273.625.625.625h2.5A.64.64 0 0 0 9.375 23c0-.312-.312-.625-.625-.625h-2.5a.64.64 0 0 0-.625.625m6.25-15h-8.75v12.5h8.75z' />
    </g>
    <defs>
      <clipPath id='f52392d4f16d3e1b7a8482a1b4e2a5a1__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonLgFillIcon);
export default ForwardRef;
