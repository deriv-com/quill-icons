import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenCaptionRegularIcon = (
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
      <path d='M9.25 4.25h-7.5A.755.755 0 0 0 1 5v6h9V5a.77.77 0 0 0-.75-.75m.75 7.5H1V14c0 .422.328.75.75.75h7.5c.398 0 .75-.328.75-.75zM1.75 3.5h7.5c.82 0 1.5.68 1.5 1.5v9c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V5c0-.82.656-1.5 1.5-1.5m2.625 9.75c0-.187.164-.375.375-.375h1.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.5a.37.37 0 0 1-.375-.375' />
    </g>
    <defs>
      <clipPath id='d793c6cefc88154a7576ab6117f88bff__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenCaptionRegularIcon);
export default ForwardRef;
