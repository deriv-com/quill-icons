import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.375 7.156c0 .89-.398 1.688-1.031 2.227a2.87 2.87 0 0 1 1.406 2.46 2.906 2.906 0 0 1-2.906 2.907H3.156A2.89 2.89 0 0 1 .25 11.844c0-1.031.54-1.969 1.383-2.461A2.9 2.9 0 0 1 .625 7.156 2.906 2.906 0 0 1 3.531 4.25h.938a2.92 2.92 0 0 1 2.906 2.906m-2.906 2.907H3.156a1.78 1.78 0 1 0 0 3.562h1.688a1.78 1.78 0 1 0 0-3.562zm0-1.126a1.78 1.78 0 1 0 0-3.562H3.53a1.78 1.78 0 1 0 0 3.563z' />
    </g>
    <defs>
      <clipPath id='2f81411930696309a396388ca39179d6__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightCaptionBoldIcon);
export default ForwardRef;
