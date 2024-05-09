import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightSmBoldIcon = (
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
      <path d='M9.219 6.375c.355 0 .656.3.656.656v6.563c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V8.617l-6.317 6.317c-.273.273-.683.273-.93 0a.6.6 0 0 1 0-.903l6.317-6.316H2.656A.65.65 0 0 1 2 7.059c0-.383.273-.657.656-.657H9.22z' />
    </g>
    <defs>
      <clipPath id='c0bb4f14018f0317c9d8fb92ee29873c__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightSmBoldIcon);
export default ForwardRef;
