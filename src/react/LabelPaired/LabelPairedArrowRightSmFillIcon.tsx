import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightSmFillIcon = (
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
      <path d='m12.352 11.379-4.375 4.375a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l2.87-2.899H1.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h8.367l-2.87-2.871a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l4.375 4.374a.843.843 0 0 1 0 1.23' />
    </g>
    <defs>
      <clipPath id='51bec9cd6d134948af8e005d6c3b8e50__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightSmFillIcon);
export default ForwardRef;
