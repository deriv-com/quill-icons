import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfXlBoldIcon = (
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
      <path d='M3 27.75h2.25V30H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h7.734c.797 0 1.547.328 2.11.89l4.265 4.266c.563.563.891 1.313.891 2.11v6.984h-2.25V13.5H12a1.48 1.48 0 0 1-1.5-1.5V8.25H3c-.422 0-.75.375-.75.75v18c0 .422.328.75.75.75m5.25-5.25h1.5c1.406 0 2.625 1.219 2.625 2.625 0 1.453-1.219 2.625-2.625 2.625H9v1.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75m1.5 3.75a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 9.75 24H9v2.25zm4.5-3.75h1.5c1.219 0 2.25 1.031 2.25 2.25v3A2.25 2.25 0 0 1 15.75 30h-1.5a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75m1.5 6c.375 0 .75-.328.75-.75v-3c0-.375-.375-.75-.75-.75H15v4.5zm3.75-5.25c0-.375.328-.75.75-.75h2.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H21v1.5h1.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H21v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-6' />
    </g>
    <defs>
      <clipPath id='7086ff1a018128bf88d2f9f22481509c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfXlBoldIcon);
export default ForwardRef;
