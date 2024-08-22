import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsLgRegularIcon = (
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
      <path d='M.25 8.625C.25 8.313.523 8 .875 8h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.875a.617.617 0 0 1-.625-.625m0 6.25c0-.312.273-.625.625-.625h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.875a.617.617 0 0 1-.625-.625m17.5 6.25a.64.64 0 0 1-.625.625H.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h16.25c.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='9b997be657b10e888135b43df44e6961__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsLgRegularIcon);
export default ForwardRef;
