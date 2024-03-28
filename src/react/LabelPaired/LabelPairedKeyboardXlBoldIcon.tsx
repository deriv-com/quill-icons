import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardXlBoldIcon = (
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
      <path d='M3 11.25c-.422 0-.75.375-.75.75v12c0 .422.328.75.75.75h21c.375 0 .75-.328.75-.75V12c0-.375-.375-.75-.75-.75zM0 12c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm8.25 9h10.5c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75H8.25a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m-3.375-3.375c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75-4.5h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m3 4.5c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75-4.5h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m3 4.5c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75-4.5h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m3 4.5c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75-4.5h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m3 4.5c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75-4.5h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='98399822db2f7ec6a35d2130355231c6__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardXlBoldIcon);
export default ForwardRef;
