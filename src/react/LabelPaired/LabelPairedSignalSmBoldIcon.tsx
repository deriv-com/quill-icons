import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16 3.75c.355 0 .656.3.656.656v12.688c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V4.406c0-.355.273-.656.656-.656m-3.5 2.625c.355 0 .656.3.656.656v10.063c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V7.03c0-.355.273-.656.656-.656M9 9c.355 0 .656.3.656.656v7.438c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V9.656C8.344 9.301 8.617 9 9 9m-3.5 2.625c.355 0 .656.3.656.656v4.813c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V12.28c0-.355.273-.656.656-.656M2 14.25c.355 0 .656.3.656.656v2.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-2.188c0-.355.273-.656.656-.656' />
    </g>
    <defs>
      <clipPath id='0a0454a32af36abc726c84395e16d093__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalSmBoldIcon);
export default ForwardRef;
