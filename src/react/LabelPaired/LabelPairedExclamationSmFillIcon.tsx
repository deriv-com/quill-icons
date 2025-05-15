import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={22}
    viewBox='0 0 2 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.5v7c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-7c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875M1 16.875c-.41 0-.766-.191-.957-.547a1.11 1.11 0 0 1 0-1.094c.191-.328.547-.546.957-.546.383 0 .738.218.93.546.191.356.191.766 0 1.094a1.04 1.04 0 0 1-.93.547' />
    </g>
    <defs>
      <clipPath id='a9204f38c875b3694eb458b8ee69d417__a'>
        <path d='M0 0h2v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationSmFillIcon);
export default ForwardRef;
