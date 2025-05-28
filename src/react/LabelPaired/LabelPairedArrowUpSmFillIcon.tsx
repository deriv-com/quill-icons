import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpSmFillIcon = (
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
      <path d='m6.102 4.898 4.375 4.375a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-2.872-2.87V16c0 .492-.41.875-.875.875A.864.864 0 0 1 4.625 16V7.633l-2.898 2.87a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L4.87 4.898a.843.843 0 0 1 1.23 0' />
    </g>
    <defs>
      <clipPath id='d236b46d9756a69e6e02da509efa0464__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpSmFillIcon);
export default ForwardRef;
