import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 6.156c0-.355.273-.656.656-.656H11.97c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H1.03a.63.63 0 0 1-.656-.657m1.75 4.375c0-.355.273-.656.656-.656h7.438c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H2.78a.63.63 0 0 1-.656-.656m6.125 4.375c0 .383-.3.656-.656.656H5.406a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656h2.188c.355 0 .656.3.656.656' />
    </g>
    <defs>
      <clipPath id='d451eac405780a20d7d3fd791783365c__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterSmBoldIcon);
export default ForwardRef;
