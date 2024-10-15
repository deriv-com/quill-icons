import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftSmRegularIcon = (
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
      <path d='M1.313 9a.43.43 0 0 1-.438-.437v-3.5a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v2.542A6.11 6.11 0 0 1 7 4.625c3.363 0 6.125 2.762 6.125 6.125 0 3.39-2.762 6.125-6.125 6.125a6.12 6.12 0 0 1-5.195-2.844c-.192-.3.027-.656.383-.656.164 0 .3.11.382.246A5.3 5.3 0 0 0 7 16a5.25 5.25 0 0 0 5.25-5.25A5.25 5.25 0 0 0 7 5.5a5.26 5.26 0 0 0-4.566 2.625h2.379a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437z' />
    </g>
    <defs>
      <clipPath id='90f389b649884663146427b2471c2c35__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftSmRegularIcon);
export default ForwardRef;
