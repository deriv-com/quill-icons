import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterSmRegularIcon = (
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
      <path d='M0 5.719c0-.602.465-1.094 1.066-1.094h11.84c.602 0 1.094.492 1.094 1.094 0 .246-.11.492-.273.683L8.75 12.445v3.528c0 .492-.437.93-.93.93a.88.88 0 0 1-.574-.22l-1.668-1.285a.86.86 0 0 1-.355-.683v-2.27L.246 6.402A1.05 1.05 0 0 1 0 5.72M1.066 5.5c-.109 0-.191.11-.191.219 0 .054 0 .082.027.136l5.114 6.153c.054.082.109.191.109.273v2.434L7.793 16h.027c.028 0 .055 0 .055-.027V12.28c0-.082.027-.191.082-.273l5.113-6.153c.028-.054.055-.082.055-.136 0-.11-.11-.219-.219-.219z' />
    </g>
    <defs>
      <clipPath id='4bb329005e8b87708f283693952e2e0c__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterSmRegularIcon);
export default ForwardRef;
