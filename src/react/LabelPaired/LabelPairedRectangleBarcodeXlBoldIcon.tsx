import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeXlBoldIcon = (
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
      <path d='M3 9.75c-.422 0-.75.375-.75.75v15c0 .422.328.75.75.75h21c.375 0 .75-.328.75-.75v-15c0-.375-.375-.75-.75-.75zm-3 .75c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zM5.625 12c.61 0 1.125.516 1.125 1.125v9.75A1.11 1.11 0 0 1 5.625 24c-.656 0-1.125-.469-1.125-1.125v-9.75c0-.61.469-1.125 1.125-1.125M9 12c.375 0 .75.375.75.75v10.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-10.5c0-.375.328-.75.75-.75m2.25 1.125c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v9.75A1.11 1.11 0 0 1 12.375 24c-.656 0-1.125-.469-1.125-1.125zM17.625 12c.61 0 1.125.516 1.125 1.125v9.75A1.11 1.11 0 0 1 17.625 24c-.656 0-1.125-.469-1.125-1.125v-9.75c0-.61.469-1.125 1.125-1.125m3.375.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v10.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75z' />
    </g>
    <defs>
      <clipPath id='f2394a4e30da03c525e7a1c563a6e9ba__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeXlBoldIcon);
export default ForwardRef;
