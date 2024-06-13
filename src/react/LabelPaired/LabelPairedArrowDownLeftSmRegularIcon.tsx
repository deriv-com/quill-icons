import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftSmRegularIcon = (
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
      <path d='M1.563 15.125a.43.43 0 0 1-.438-.437V8.561a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438v5.085l7.11-7.136a.463.463 0 0 1 .628 0 .463.463 0 0 1 0 .629L2.602 14.25h5.086a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437z' />
    </g>
    <defs>
      <clipPath id='23820e9ecd5294db1127eae8eb5b0a8b__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftSmRegularIcon);
export default ForwardRef;
