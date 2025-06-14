import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListCaptionRegularIcon = (
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
      <path d='M1.75 5a.755.755 0 0 0-.75.75v7.5c0 .422.328.75.75.75h7.5c.398 0 .75-.328.75-.75v-7.5A.77.77 0 0 0 9.25 5zm-1.5.75c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5zm2.438 1.5c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563m2.062 0c0-.187.164-.375.375-.375h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3a.37.37 0 0 1-.375-.375m0 2.25c0-.187.164-.375.375-.375h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3A.37.37 0 0 1 4.75 9.5m0 2.25c0-.187.164-.375.375-.375h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3a.37.37 0 0 1-.375-.375m-1.5-1.687a.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563m-.562 1.687c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563' />
    </g>
    <defs>
      <clipPath id='cafbde7bc6f2b0bf3a4363d8c9742c8a__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListCaptionRegularIcon);
export default ForwardRef;
