import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.488 7.578-2.625 2.625a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.629l1.887-1.886H.813a.43.43 0 0 1-.438-.438.45.45 0 0 1 .438-.437H11.12l-1.887-1.86a.463.463 0 0 1 0-.629.463.463 0 0 1 .63 0l2.624 2.625a.463.463 0 0 1 0 .63M3.11 17.203.484 14.578a.463.463 0 0 1 0-.629l2.625-2.625a.463.463 0 0 1 .63 0 .463.463 0 0 1 0 .63l-1.887 1.858h10.336a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.438H1.851l1.886 1.886a.463.463 0 0 1 0 .63.463.463 0 0 1-.629 0' />
    </g>
    <defs>
      <clipPath id='44c8847e4240c0f50fdba89317c0a42f__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftSmRegularIcon);
export default ForwardRef;
