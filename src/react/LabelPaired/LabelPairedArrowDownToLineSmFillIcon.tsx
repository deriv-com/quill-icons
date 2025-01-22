import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineSmFillIcon = (
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
      <path d='M1.125 16.875A.864.864 0 0 1 .25 16c0-.465.383-.875.875-.875h8.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875zm4.977-3.746a.843.843 0 0 1-1.23 0l-3.5-3.5a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l2.023 1.996V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v4.895l1.996-1.997a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23z' />
    </g>
    <defs>
      <clipPath id='efb0990ad17f92aee81c4f03ff00ec68__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineSmFillIcon);
export default ForwardRef;
