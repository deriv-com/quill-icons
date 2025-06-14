import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeXlFillIcon = (
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
      <path d='M3 7.5h21c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3M5.625 12A1.11 1.11 0 0 0 4.5 13.125v9.75c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125v-9.75A1.14 1.14 0 0 0 5.625 12m2.625.75v10.5c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-10.5c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75m4.125-.75a1.11 1.11 0 0 0-1.125 1.125v9.75c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125v-9.75A1.14 1.14 0 0 0 12.375 12m4.125 1.125v9.75c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125v-9.75A1.14 1.14 0 0 0 17.625 12a1.11 1.11 0 0 0-1.125 1.125M21.75 12c-.422 0-.75.375-.75.75v10.5c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-10.5c0-.375-.375-.75-.75-.75' />
    </g>
    <defs>
      <clipPath id='c177468636ee3852c384e3be37663eb2__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeXlFillIcon);
export default ForwardRef;
