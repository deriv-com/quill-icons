import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownSmBoldIcon = (
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
      <path d='M5.008 16.684.414 11.87c-.246-.273-.246-.684.027-.93.274-.246.684-.246.93.028l3.473 3.637V5.28c0-.355.273-.656.656-.656.355 0 .656.3.656.656v9.325l3.446-3.637a.65.65 0 0 1 .93-.028c.273.246.273.657.027.93l-4.594 4.813a.64.64 0 0 1-.465.191.66.66 0 0 1-.492-.191' />
    </g>
    <defs>
      <clipPath id='89efab96b5ca7e4aef1cd584b5f8460e__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownSmBoldIcon);
export default ForwardRef;
