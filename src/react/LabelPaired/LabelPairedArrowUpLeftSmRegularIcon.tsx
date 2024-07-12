import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftSmRegularIcon = (
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
      <path d='M1.563 6.375h6.125a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.601l7.136 7.137a.463.463 0 0 1 0 .629.463.463 0 0 1-.629 0L2 7.879v5.059a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V6.812a.45.45 0 0 1 .438-.437' />
    </g>
    <defs>
      <clipPath id='df87fb60c91e23140ae246f8cf135808__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftSmRegularIcon);
export default ForwardRef;
