import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileLinesCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 3.5h3.75v3c0 .422.328.75.75.75h3V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m4.5 0 3 3H6zm-3.375 6a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375zm0 1.5a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375zm0 1.5a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375z' />
    </g>
    <defs>
      <clipPath id='cd444551f0a3b436d0a965dcd69ac52f__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileLinesCaptionFillIcon);
export default ForwardRef;
