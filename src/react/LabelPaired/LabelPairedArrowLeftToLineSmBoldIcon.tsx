import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineSmBoldIcon = (
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
      <path d='M.375 15.344V6.156c0-.355.273-.656.656-.656.356 0 .657.3.657.656v9.188c0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656m3.691-5.059 3.72-3.5c.273-.246.683-.246.929.027.246.274.246.684-.027.93l-2.516 2.352h5.797c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H6.172l2.516 2.38c.273.245.273.655.027.929-.246.273-.656.273-.93.027l-3.719-3.5a.66.66 0 0 1-.191-.492c0-.164.055-.355.191-.465' />
    </g>
    <defs>
      <clipPath id='8dc746b2d013563b42b0f581d3116a2e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineSmBoldIcon);
export default ForwardRef;
