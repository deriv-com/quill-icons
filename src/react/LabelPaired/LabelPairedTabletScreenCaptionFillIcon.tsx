import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenCaptionFillIcon = (
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
      <path d='M.25 5c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v9c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14zM4 14c0 .21.164.375.375.375h2.25A.385.385 0 0 0 7 14a.4.4 0 0 0-.375-.375h-2.25A.385.385 0 0 0 4 14m5.25-9h-7.5v7.5h7.5z' />
    </g>
    <defs>
      <clipPath id='9fd6373910f25d49e5dc9d2a6e244ba4__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenCaptionFillIcon);
export default ForwardRef;
