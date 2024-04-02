import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightSmRegularIcon = (
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
      <path d='M9.438 15.125H3.311a.43.43 0 0 1-.437-.437.45.45 0 0 1 .438-.438H8.37L1.234 7.14a.463.463 0 0 1 0-.628.463.463 0 0 1 .63 0L9 13.648V8.563a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v6.124a.45.45 0 0 1-.437.438' />
    </g>
    <defs>
      <clipPath id='6abef073ebdb5b4b92c452e6cda4030f__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightSmRegularIcon);
export default ForwardRef;
