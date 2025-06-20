import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardCaptionFillIcon = (
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
      <path d='M1.75 4.25h10.5c.82 0 1.5.68 1.5 1.5v.75H.25v-.75c0-.82.656-1.5 1.5-1.5m12 4.5v4.5c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5v-4.5zm-10.875 3a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h1.5a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375zm2.625.375c0 .21.164.375.375.375h3a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-3a.385.385 0 0 0-.375.375' />
    </g>
    <defs>
      <clipPath id='542b5a4998201bc667979d98e4124559__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardCaptionFillIcon);
export default ForwardRef;
