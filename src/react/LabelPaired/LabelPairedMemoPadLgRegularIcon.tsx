import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadLgRegularIcon = (
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
      <path d='M1.5 10.5V23c0 .703.547 1.25 1.25 1.25h12.5c.664 0 1.25-.547 1.25-1.25V10.5zm0-1.25h15V8c0-.664-.586-1.25-1.25-1.25H2.75c-.703 0-1.25.586-1.25 1.25zM17.75 8v15c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23V8c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5M4.625 13h8.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-8.75A.617.617 0 0 1 4 13.625c0-.312.273-.625.625-.625m0 3.75h8.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-8.75A.617.617 0 0 1 4 17.375c0-.312.273-.625.625-.625m0 3.75h5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5A.617.617 0 0 1 4 21.125c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='4f016c74dbc16ccdbe13aa5c5e14338e__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadLgRegularIcon);
export default ForwardRef;
