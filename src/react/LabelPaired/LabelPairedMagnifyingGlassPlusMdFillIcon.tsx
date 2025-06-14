import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassPlusMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13 10.5a6.5 6.5 0 0 1-1.25 3.844l3.938 3.969a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0l-3.969-3.969C9.25 16.563 7.906 17 6.5 17A6.495 6.495 0 0 1 0 10.5C0 6.938 2.906 4 6.5 4c3.563 0 6.5 2.938 6.5 6.5m-7.25 2.75c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-2h2a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75h-2v-2A.76.76 0 0 0 6.5 7a.74.74 0 0 0-.75.75v2h-2a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h2z' />
    </g>
    <defs>
      <clipPath id='ea49c6442c894038d1efef1748031504__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassPlusMdFillIcon);
export default ForwardRef;
