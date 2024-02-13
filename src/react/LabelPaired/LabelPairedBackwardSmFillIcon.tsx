import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardSmFillIcon = (
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
      <path d='m12.578 15.809-4.703-3.91V9.601l4.703-3.91q.411-.33.93-.11.465.246.492.793v8.75q-.027.547-.492.793-.519.22-.93-.11M7 13.375v1.75q-.027.547-.492.793-.52.22-.93-.11l-5.25-4.374A.85.85 0 0 1 0 10.75q0-.41.328-.684l5.25-4.375q.41-.328.93-.109.465.246.492.793v7' />
    </g>
    <defs>
      <clipPath id='5411946485e218707da4e4a0b0e82023__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardSmFillIcon);
export default ForwardRef;
