import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5.375a.385.385 0 0 0-.375.375v7.5c0 .21.164.375.375.375h7.5a.385.385 0 0 0 .375-.375v-7.5a.4.4 0 0 0-.375-.375zm-1.5.375c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5zm2.25 1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75m2.438 0c0-.305.234-.562.562-.562h2.25a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563H5.5a.54.54 0 0 1-.562-.563m0 2.25c0-.305.234-.562.562-.562h2.25a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563H5.5a.54.54 0 0 1-.562-.563m0 2.25c0-.305.234-.562.562-.562h2.25a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563H5.5a.54.54 0 0 1-.562-.563m-1.688-1.5a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75m-.75 1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='80f5b0c070671ffa393b55212be8d379__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListCaptionBoldIcon);
export default ForwardRef;
