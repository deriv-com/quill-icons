import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18 21.75c.375 0 .75-.328.75-.75v-9.562L15.563 8.25H9c-.422 0-.75.375-.75.75v12c0 .422.328.75.75.75zM9 24c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h6.563c.562 0 1.171.281 1.593.703l3.14 3.14c.423.423.704 1.032.704 1.595V21c0 1.688-1.36 3-3 3zM3 12h1.5v2.25H3c-.422 0-.75.375-.75.75v12c0 .422.328.75.75.75h9c.375 0 .75-.328.75-.75v-1.5H15V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V15c0-1.64 1.313-3 3-3' />
    </g>
    <defs>
      <clipPath id='8591e275cd164273746323fdcd17b080__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyXlBoldIcon);
export default ForwardRef;
