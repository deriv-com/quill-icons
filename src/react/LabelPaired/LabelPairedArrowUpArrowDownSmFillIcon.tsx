import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.102 4.898 2.625 2.625a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-1.122-1.12V16c0 .492-.41.875-.875.875A.864.864 0 0 1 3.625 16V7.633l-1.148 1.12a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L3.87 4.898a.843.843 0 0 1 1.23 0m9.625 9.106-2.625 2.625a.843.843 0 0 1-1.23 0l-2.626-2.625a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l1.149 1.12V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v8.395l1.121-1.122a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23' />
    </g>
    <defs>
      <clipPath id='365de9a1d187b10a5b756b09d41ce1b0__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownSmFillIcon);
export default ForwardRef;
