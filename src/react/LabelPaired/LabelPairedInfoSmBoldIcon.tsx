import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={22}
    viewBox='0 0 6 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.906 5.719c0-.383.192-.739.547-.93a1.11 1.11 0 0 1 1.094 0c.328.191.547.547.547.93 0 .41-.219.765-.547.957a1.11 1.11 0 0 1-1.094 0c-.355-.192-.547-.547-.547-.957m-1.093 3.5c0-.356.273-.656.656-.656H3c.355 0 .656.3.656.656v7.219H4.97c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H1.03a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h1.313V9.875h-.875a.63.63 0 0 1-.657-.656' />
    </g>
    <defs>
      <clipPath id='23d5eda99d19f10f340fb17e68e47fa0__a'>
        <path d='M0 0h6v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoSmBoldIcon);
export default ForwardRef;
