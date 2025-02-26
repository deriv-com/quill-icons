import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassMinusMdBoldIcon = (
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
      <path d='M6.5 5.5c-1.812 0-3.437.969-4.344 2.5a4.94 4.94 0 0 0 0 5A4.97 4.97 0 0 0 6.5 15.5a4.96 4.96 0 0 0 4.313-2.5 4.94 4.94 0 0 0 0-5C9.906 6.469 8.28 5.5 6.5 5.5m0 11.5A6.495 6.495 0 0 1 0 10.5C0 6.938 2.906 4 6.5 4c3.563 0 6.5 2.938 6.5 6.5a6.6 6.6 0 0 1-1.406 4.063l4.156 4.187a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-4.188-4.156A6.55 6.55 0 0 1 6.5 17M4.25 9.75h4.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' />
    </g>
    <defs>
      <clipPath id='2439bba98f70ff57915f9f8bb1d4de76__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassMinusMdBoldIcon);
export default ForwardRef;
