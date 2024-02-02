import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 15.5c0-.312.273-.625.625-.625H3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.625A.617.617 0 0 1 0 15.5m6.875 0c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H7.5a.617.617 0 0 1-.625-.625m6.875 0c0-.312.273-.625.625-.625H17.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.125a.617.617 0 0 1-.625-.625m6.875 0c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H21.25a.617.617 0 0 1-.625-.625' />
    </g>
    <defs>
      <clipPath id='ad931ffa46d7a2cd__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedLgRegularIcon);
export default ForwardRef;
