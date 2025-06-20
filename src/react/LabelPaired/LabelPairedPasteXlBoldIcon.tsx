import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteXlBoldIcon = (
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
      <path d='M4.875 8.25A2.634 2.634 0 0 1 7.5 6c1.313 0 2.39.984 2.578 2.25H12c1.36 0 2.531.984 2.906 2.25H12c-1.36 0-2.531.61-3.375 1.5H5.25a1.48 1.48 0 0 1-1.5-1.5H3c-.422 0-.75.375-.75.75V24c0 .422.328.75.75.75h4.5V27H3c-1.687 0-3-1.312-3-3V11.25c0-1.64 1.313-3 3-3zm1.875.375c0 .422.328.75.75.75.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75M21 27.75c.375 0 .75-.328.75-.75v-9.562l-3.187-3.188H12c-.422 0-.75.375-.75.75v12c0 .422.328.75.75.75zM12 30c-1.687 0-3-1.312-3-3V15c0-1.64 1.313-3 3-3h6.563c.562 0 1.171.281 1.593.703l3.14 3.14c.423.423.704 1.032.704 1.595V27c0 1.688-1.36 3-3 3z' />
    </g>
    <defs>
      <clipPath id='648bf7cf7a479ee54adb36c0617fb060__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteXlBoldIcon);
export default ForwardRef;
