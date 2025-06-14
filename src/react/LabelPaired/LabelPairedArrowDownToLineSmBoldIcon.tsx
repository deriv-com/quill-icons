import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineSmBoldIcon = (
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
      <path d='M10.094 16.875H.906a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h9.188c.355 0 .656.301.656.657 0 .383-.3.656-.656.656m-5.086-3.691-3.5-3.72a.68.68 0 0 1 .027-.929c.274-.246.684-.246.93.027l2.379 2.516V5.281c0-.355.273-.656.656-.656.355 0 .656.3.656.656v5.797l2.352-2.515c.246-.274.656-.274.93-.028.273.246.273.656.027.93l-3.5 3.719a.64.64 0 0 1-.465.191.66.66 0 0 1-.492-.191' />
    </g>
    <defs>
      <clipPath id='efb05adb924e00ea142804fbe8984cbe__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineSmBoldIcon);
export default ForwardRef;
