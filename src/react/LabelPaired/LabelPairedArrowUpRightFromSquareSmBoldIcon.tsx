import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.313 4.406c0-.355.273-.656.656-.656h4.347c.383 0 .657.3.657.656v4.375a.63.63 0 0 1-.657.656.65.65 0 0 1-.656-.656V5.992L6.563 12.09a.6.6 0 0 1-.903 0c-.273-.246-.273-.656 0-.93l6.098-6.097h-2.79a.63.63 0 0 1-.655-.657m-6.344.219h3.5c.355 0 .656.3.656.656 0 .383-.3.657-.656.657h-3.5c-.383 0-.657.3-.657.656v9.187c0 .383.274.656.657.656h9.187a.65.65 0 0 0 .656-.656v-3.5c0-.355.274-.656.657-.656.355 0 .656.3.656.656v3.5a1.98 1.98 0 0 1-1.969 1.969H1.97A1.96 1.96 0 0 1 0 15.781V6.594c0-1.067.875-1.969 1.969-1.969' />
    </g>
    <defs>
      <clipPath id='0bb801aab3fe57ae39fa08e72f51b543__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareSmBoldIcon);
export default ForwardRef;
