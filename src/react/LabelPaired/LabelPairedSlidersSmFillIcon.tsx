import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 15.125c0-.465.383-.875.875-.875h1.477a2.24 2.24 0 0 1 2.023-1.312 2.2 2.2 0 0 1 1.996 1.312h6.754a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H6.371a2.16 2.16 0 0 1-1.996 1.313c-.902 0-1.668-.52-2.023-1.313H.875A.864.864 0 0 1 0 15.125m3.5 0c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875m5.25-4.375c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875m.875-2.187a2.2 2.2 0 0 1 1.996 1.312h1.504a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-1.504a2.16 2.16 0 0 1-1.996 1.313c-.902 0-1.668-.52-2.023-1.313H.875A.864.864 0 0 1 0 10.75c0-.465.383-.875.875-.875h6.727a2.24 2.24 0 0 1 2.023-1.312M5.25 7.25a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875c0 .492.383.875.875.875M7.246 5.5h5.879a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H7.246A2.16 2.16 0 0 1 5.25 8.563c-.902 0-1.668-.52-2.023-1.313H.875A.864.864 0 0 1 0 6.375C0 5.91.383 5.5.875 5.5h2.352A2.24 2.24 0 0 1 5.25 4.188 2.2 2.2 0 0 1 7.246 5.5' />
    </g>
    <defs>
      <clipPath id='e56731e17f0ab94b34cc18cd24125c25__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersSmFillIcon);
export default ForwardRef;
