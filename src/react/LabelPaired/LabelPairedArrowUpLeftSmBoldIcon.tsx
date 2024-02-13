import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftSmBoldIcon = (
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
      <path d='M1.781 6.375h6.563q.601.054.656.656-.054.601-.656.657H3.367l6.317 6.316q.383.465 0 .93-.465.383-.93 0L2.438 8.617v4.977q-.056.601-.657.656-.601-.055-.656-.656V7.03q.054-.601.656-.656' />
    </g>
    <defs>
      <clipPath id='8f9f3e14236996552606f7829c04cc3d__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftSmBoldIcon);
export default ForwardRef;
