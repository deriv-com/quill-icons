import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchLgFillIcon = (
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
      <path d='M5 8H3.75a.64.64 0 0 0-.625.625v13.75c0 .352.273.625.625.625h7.5a.64.64 0 0 0 .625-.625V8.625c0-.312-.312-.625-.625-.625H10v.625a.64.64 0 0 1-.625.625h-3.75A.617.617 0 0 1 5 8.625zM3.75 5.5h7.5a3.134 3.134 0 0 1 3.125 3.125v13.75A3.11 3.11 0 0 1 11.25 25.5h-7.5c-1.758 0-3.125-1.367-3.125-3.125V8.625A3.11 3.11 0 0 1 3.75 5.5M5 21.125c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75A.617.617 0 0 1 5 21.125' />
    </g>
    <defs>
      <clipPath id='b74bc1c65b05b2be930cba644c9ec9c7__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchLgFillIcon);
export default ForwardRef;
