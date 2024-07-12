import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftSmFillIcon = (
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
      <path d='m.621 10.148 4.375-4.375a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-2.87 2.872h8.394a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H3.355l2.872 2.898a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L.62 11.38a.843.843 0 0 1 0-1.23' />
    </g>
    <defs>
      <clipPath id='45703e8c09aa26261c8fc9a8483eccd8__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftSmFillIcon);
export default ForwardRef;
