import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderSmBoldIcon = (
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
      <path d='M2.781 4.625h.438c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H2.78A1.08 1.08 0 0 0 1.687 7.03v.438c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V7.03a2.41 2.41 0 0 1 2.406-2.406M1.031 9c.356 0 .657.3.657.656v2.188c0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656V9.656c0-.355.273-.656.656-.656M11.97 9c.355 0 .656.3.656.656v2.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V9.656c0-.355.273-.656.656-.656m0-.875a.63.63 0 0 1-.656-.656V7.03c0-.601-.493-1.093-1.094-1.093H9.78a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656h.438a2.43 2.43 0 0 1 2.406 2.406v.438c0 .383-.3.656-.656.656m.656 5.906v.438a2.41 2.41 0 0 1-2.406 2.406H9.78a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h.438a1.08 1.08 0 0 0 1.094-1.093v-.438c0-.355.273-.656.656-.656.355 0 .656.3.656.656m-10.937 0v.438c0 .629.464 1.094 1.093 1.094h.438c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H2.78a2.39 2.39 0 0 1-2.406-2.406v-.438c0-.355.273-.656.656-.656.356 0 .657.3.657.656m3.718 2.844a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h2.188c.355 0 .656.301.656.657 0 .383-.3.656-.656.656zM4.75 5.281c0-.355.273-.656.656-.656h2.188c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H5.406a.63.63 0 0 1-.656-.657' />
    </g>
    <defs>
      <clipPath id='ebcfa4de4556d0ad25901c74826a5c6e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderSmBoldIcon);
export default ForwardRef;
