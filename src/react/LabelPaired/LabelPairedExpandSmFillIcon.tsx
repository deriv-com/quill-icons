import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandSmFillIcon = (
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
      <path d='M1.25 4.625h2.625a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-1.75v1.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V5.5c0-.465.383-.875.875-.875m.875 8.75v1.75h1.75A.9.9 0 0 1 4.75 16c0 .492-.41.875-.875.875H1.25A.864.864 0 0 1 .375 16v-2.625c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m7-8.75h2.625a.9.9 0 0 1 .875.875v2.625c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-1.75h-1.75A.864.864 0 0 1 8.25 5.5c0-.465.383-.875.875-.875m3.5 8.75V16c0 .492-.41.875-.875.875H9.125A.864.864 0 0 1 8.25 16c0-.465.383-.875.875-.875h1.75v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875' />
    </g>
    <defs>
      <clipPath id='4462a55bd8aa4a2f0340242443769ec4__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandSmFillIcon);
export default ForwardRef;
