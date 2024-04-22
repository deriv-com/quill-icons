import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineSmFillIcon = (
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
      <path d='M1.125 4.625h8.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-8.75A.864.864 0 0 1 .25 5.5c0-.465.383-.875.875-.875m4.977 3.773 3.5 3.5a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-1.997-1.995V16c0 .492-.41.875-.875.875A.864.864 0 0 1 4.625 16v-4.867l-2.023 1.996a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l3.5-3.5a.843.843 0 0 1 1.23 0' />
    </g>
    <defs>
      <clipPath id='a0f24bcc6787bcbd0827669b6a380890__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineSmFillIcon);
export default ForwardRef;
