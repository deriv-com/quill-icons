import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCirclePlusXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.5c0-1.64 1.313-3 3-3h18c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3.75c-.422 0-.75.375-.75.75 0 .422.328.75.75.75H21c1.64 0 3 1.36 3 3v.047c-.281 0-.516-.047-.75-.047A8.23 8.23 0 0 0 15 23.25c0 2.016.703 3.844 1.875 5.25H3c-1.687 0-3-1.312-3-3zm16.5 12.75c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m3 0c0 .422.328.75.75.75h2.25v2.25c0 .422.328.75.75.75.375 0 .75-.328.75-.75V24h2.25c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75H24v-2.25c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v2.25h-2.25c-.422 0-.75.375-.75.75' />
    </g>
    <defs>
      <clipPath id='e800725d245f19d7202b47c80a42dc0d__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCirclePlusXlFillIcon);
export default ForwardRef;
