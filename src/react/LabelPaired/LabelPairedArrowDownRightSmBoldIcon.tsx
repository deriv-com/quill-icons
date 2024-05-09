import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.219 15.125H2.656A.63.63 0 0 1 2 14.469c0-.356.273-.656.656-.656h4.977L1.316 7.496c-.273-.246-.273-.656 0-.93.246-.246.657-.246.93 0l6.317 6.344V7.906c0-.355.273-.656.656-.656.355 0 .656.3.656.656v6.563c0 .383-.3.656-.656.656' />
    </g>
    <defs>
      <clipPath id='774473fd3d8d208aa50c0b1e3b58e327__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightSmBoldIcon);
export default ForwardRef;
