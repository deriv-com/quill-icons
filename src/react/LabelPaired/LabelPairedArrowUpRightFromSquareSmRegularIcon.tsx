import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareSmRegularIcon = (
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
      <path d='M9.188 3.75h4.374a.47.47 0 0 1 .438.438v4.375a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.31l-6.7 6.7a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629l6.7-6.699h-3.31a.43.43 0 0 1-.437-.437.45.45 0 0 1 .438-.438m-7.438.875h3.938a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H1.75a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875h9.625A.88.88 0 0 0 12.25 16v-3.937a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16V6.375c0-.957.766-1.75 1.75-1.75' />
    </g>
    <defs>
      <clipPath id='72f47ad58914a894c9e3fd71c25d079e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareSmRegularIcon);
export default ForwardRef;
