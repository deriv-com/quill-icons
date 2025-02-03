import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 4.25h9c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875a.385.385 0 0 0-.375.375c0 .21.164.375.375.375H10.5c.82 0 1.5.68 1.5 1.5v5.25c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5m8.25 5.625a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75' />
    </g>
    <defs>
      <clipPath id='337a26eb69048bbffdca3c5031c66f4c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCaptionFillIcon);
export default ForwardRef;
