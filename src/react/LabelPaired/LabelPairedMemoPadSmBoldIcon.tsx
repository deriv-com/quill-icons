import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadSmBoldIcon = (
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
      <path d='M11.313 7.25H1.688V16c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438zm-9.188-3.5h8.75c.957 0 1.75.793 1.75 1.75V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75M3 9.219c0-.356.273-.656.656-.656h5.688c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H3.656A.63.63 0 0 1 3 9.219m0 2.625c0-.356.273-.656.656-.656h5.688c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H3.656A.63.63 0 0 1 3 11.844m0 2.625c0-.356.273-.656.656-.656H6.72c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H3.656A.63.63 0 0 1 3 14.469' />
    </g>
    <defs>
      <clipPath id='6c5db9f716b0d3925657c1243298b19d__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadSmBoldIcon);
export default ForwardRef;
