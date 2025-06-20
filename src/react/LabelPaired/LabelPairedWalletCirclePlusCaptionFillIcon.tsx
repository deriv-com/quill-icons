import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCirclePlusCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.75c0-.82.656-1.5 1.5-1.5h9c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875a.385.385 0 0 0-.375.375c0 .21.164.375.375.375H10.5c.82 0 1.5.68 1.5 1.5v.023c-.14 0-.258-.023-.375-.023A4.116 4.116 0 0 0 7.5 12.125c0 1.008.352 1.922.938 2.625H1.5a1.48 1.48 0 0 1-1.5-1.5zm8.25 6.375c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m1.5 0c0 .21.164.375.375.375h1.125v1.125c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375V12.5h1.125a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375H12v-1.125a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375v1.125h-1.125a.385.385 0 0 0-.375.375' />
    </g>
    <defs>
      <clipPath id='b076f352bed560e3fe9b7efc7a0211c0__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCirclePlusCaptionFillIcon);
export default ForwardRef;
