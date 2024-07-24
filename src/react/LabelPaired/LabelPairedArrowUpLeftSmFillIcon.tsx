import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftSmFillIcon = (
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
      <path d='M2 6.375h6.125A.9.9 0 0 1 9 7.25c0 .492-.41.875-.875.875h-4.02l5.497 5.523a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L2.874 9.384v3.992c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V7.25c0-.465.383-.875.875-.875' />
    </g>
    <defs>
      <clipPath id='f5d4d92f2e22117e1b5730e9b8ac3bbf__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftSmFillIcon);
export default ForwardRef;
