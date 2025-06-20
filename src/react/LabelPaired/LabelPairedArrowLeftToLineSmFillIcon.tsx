import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineSmFillIcon = (
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
      <path d='M.375 6.375c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v8.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875zm3.746 5.004a.843.843 0 0 1 0-1.23l3.5-3.5a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23L6.856 9.875h4.895a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H6.855l1.997 2.023a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0z' />
    </g>
    <defs>
      <clipPath id='3f3621b8c1b5533bb090ba4277a879c0__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineSmFillIcon);
export default ForwardRef;
