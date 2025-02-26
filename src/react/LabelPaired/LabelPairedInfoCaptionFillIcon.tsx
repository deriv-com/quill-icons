import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={18}
    viewBox='0 0 5 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 5.375c0-.398.21-.75.563-.96.328-.212.773-.212 1.125 0 .328.21.562.562.562.96 0 .422-.234.773-.562.984-.352.211-.797.211-1.126 0a1.12 1.12 0 0 1-.562-.984M.25 8.75C.25 8.352.578 8 1 8h1.5c.398 0 .75.352.75.75V14H4c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.75V9.5H1a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='af76565c460512d0dee644114e7053c1__a'>
        <path d='M0 0h5v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoCaptionFillIcon);
export default ForwardRef;
