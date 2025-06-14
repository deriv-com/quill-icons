import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftSmFillIcon = (
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
      <path d='m12.352 7.879-2.625 2.625a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l1.12-1.149H1.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h8.367l-1.12-1.121a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l2.625 2.624a.843.843 0 0 1 0 1.23m-9.106 9.625L.621 14.879a.843.843 0 0 1 0-1.23l2.625-2.626a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-1.12 1.122h8.394a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H3.355l1.122 1.148a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0' />
    </g>
    <defs>
      <clipPath id='bf4503f720bcd60d7f35fcafe811fb1c__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftSmFillIcon);
export default ForwardRef;
