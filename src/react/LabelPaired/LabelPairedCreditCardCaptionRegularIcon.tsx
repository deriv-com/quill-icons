import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5a.755.755 0 0 0-.75.75v.75h12v-.75a.77.77 0 0 0-.75-.75zM1 7.25v1.5h12v-1.5zM1 9.5v3.75c0 .422.328.75.75.75h10.5c.398 0 .75-.328.75-.75V9.5zM.25 5.75c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zm2.25 6.375c0-.187.164-.375.375-.375h1.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.5a.37.37 0 0 1-.375-.375m3 0c0-.187.164-.375.375-.375h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3a.37.37 0 0 1-.375-.375' />
    </g>
    <defs>
      <clipPath id='83bc8258a33cc412bf16e719cefb197f__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardCaptionRegularIcon);
export default ForwardRef;
