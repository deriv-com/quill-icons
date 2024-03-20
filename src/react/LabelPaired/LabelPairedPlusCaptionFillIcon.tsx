import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusCaptionFillIcon = (
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
      <path d='M6.25 5.375V8.75h3.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H6.25v3.375c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V10.25H1.375a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75H4.75V5.375c0-.398.328-.75.75-.75.398 0 .75.352.75.75' />
    </g>
    <defs>
      <clipPath id='8a13cfe33062fe1ccd22c5a757e6c578__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusCaptionFillIcon);
export default ForwardRef;
