import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 7.5c.61 0 1.125.516 1.125 1.125v18.75A1.11 1.11 0 0 1 1.125 28.5C.469 28.5 0 28.031 0 27.375V8.625C0 8.015.469 7.5 1.125 7.5m4.125 0c.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V8.25c0-.375.328-.75.75-.75m3.375 0c.61 0 1.125.516 1.125 1.125v18.75A1.11 1.11 0 0 1 8.625 28.5c-.656 0-1.125-.469-1.125-1.125V8.625c0-.61.469-1.125 1.125-1.125m5.25 0c.61 0 1.125.516 1.125 1.125v18.75a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125V8.625c0-.61.469-1.125 1.125-1.125m7.875 1.125c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v18.75a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125zm-3-.375c0-.375.328-.75.75-.75.375 0 .75.375.75.75v19.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75z' />
    </g>
    <defs>
      <clipPath id='3bcf3999fa046332c65cd6364ce08a79__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeXlBoldIcon);
export default ForwardRef;
