import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterLgRegularIcon = (
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
      <path d='M.25 8.625C.25 8.313.523 8 .875 8h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.875a.617.617 0 0 1-.625-.625m2.5 6.25c0-.312.273-.625.625-.625h11.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H3.375a.617.617 0 0 1-.625-.625m8.75 6.25a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='451e74fdf3c7ce4e4d385006ae10fe56__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterLgRegularIcon);
export default ForwardRef;
