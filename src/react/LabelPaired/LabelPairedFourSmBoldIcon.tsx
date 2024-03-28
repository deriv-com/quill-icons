import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourSmBoldIcon = (
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
      <path d='m5.418 5.61-3.445 6.453h5.715V7.906c0-.355.273-.656.656-.656.355 0 .656.3.656.656v4.157h1.094c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H9v2.844c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-2.844H.906c-.246 0-.465-.11-.574-.3a.7.7 0 0 1-.027-.657L4.242 4.98c.192-.3.574-.437.903-.273.3.164.437.574.273.902' />
    </g>
    <defs>
      <clipPath id='6a7f4276a8b2b922b6186c334a60e9e9__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourSmBoldIcon);
export default ForwardRef;
