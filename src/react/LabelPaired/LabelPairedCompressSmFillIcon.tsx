import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressSmFillIcon = (
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
      <path d='M4.75 5.5v2.625c0 .492-.41.875-.875.875H1.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875H3V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m-3.5 7h2.625a.9.9 0 0 1 .875.875V16c0 .492-.41.875-.875.875A.864.864 0 0 1 3 16v-1.75H1.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875m8.75-7v1.75h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H9.125a.864.864 0 0 1-.875-.875V5.5c0-.465.383-.875.875-.875A.9.9 0 0 1 10 5.5m-.875 7h2.625a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H10V16c0 .492-.41.875-.875.875A.864.864 0 0 1 8.25 16v-2.625c0-.465.383-.875.875-.875' />
    </g>
    <defs>
      <clipPath id='1a91d6e5ae3c684bad614478f8724c1b__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressSmFillIcon);
export default ForwardRef;
