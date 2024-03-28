import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightSmFillIcon = (
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
      <path d='M9 15.125H2.875A.864.864 0 0 1 2 14.25c0-.465.383-.875.875-.875h3.992L1.371 7.879a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l5.524 5.496v-4.02c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v6.125c0 .492-.41.875-.875.875' />
    </g>
    <defs>
      <clipPath id='ea1eaee265a4a29e55f7e2507d43446b__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightSmFillIcon);
export default ForwardRef;
