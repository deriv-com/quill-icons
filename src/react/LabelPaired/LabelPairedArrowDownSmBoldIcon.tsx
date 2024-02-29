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
      <path d='M5.035 16.684.441 11.87q-.383-.492.028-.93.464-.383.902 0l3.473 3.637V5.281q.054-.601.656-.656.602.054.656.656v9.297l3.473-3.61q.437-.41.93-.027.383.438 0 .93l-4.594 4.813a.63.63 0 0 1-.465.191.63.63 0 0 1-.465-.191' />
    </g>
    <defs>
      <clipPath id='069d4af6b42efc2ed35c4262c19e9900__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownSmBoldIcon);
export default ForwardRef;
