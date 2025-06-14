import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24 9.75H3c-.422 0-.75.375-.75.75V12h22.5v-1.5c0-.375-.375-.75-.75-.75m.75 6.75H2.25v9c0 .422.328.75.75.75h21c.375 0 .75-.328.75-.75zM3 7.5h21c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3m2.625 14.25h2.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 7.875 24h-2.25c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m6 0h5.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 16.875 24h-5.25c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='2b3afe17dec95295a65d2c1bd6994098__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardXlBoldIcon);
export default ForwardRef;
