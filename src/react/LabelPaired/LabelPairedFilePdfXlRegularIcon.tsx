import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilePdfXlRegularIcon = (
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
      <path d='M3 28.5h2.25V30H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h7.313c.562 0 1.171.281 1.593.703l5.39 5.39c.423.423.704 1.032.704 1.595v6.562h-1.5V15h-5.25A2.22 2.22 0 0 1 9 12.75V7.5H3c-.844 0-1.5.703-1.5 1.5v18c0 .844.656 1.5 1.5 1.5m13.453-15c-.047-.094-.094-.234-.187-.328l-5.438-5.438c-.094-.093-.234-.14-.328-.187v5.203c0 .422.328.75.75.75zm-8.203 9h1.5c1.406 0 2.625 1.219 2.625 2.625 0 1.453-1.219 2.625-2.625 2.625H9v1.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75m1.5 3.75a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 9.75 24H9v2.25zm4.5-3.75h1.5c1.219 0 2.25 1.031 2.25 2.25v3A2.25 2.25 0 0 1 15.75 30h-1.5a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75m1.5 6c.375 0 .75-.328.75-.75v-3c0-.375-.375-.75-.75-.75H15v4.5zm3.75-5.25c0-.375.328-.75.75-.75h2.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H21v1.5h1.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H21v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-6' />
    </g>
    <defs>
      <clipPath id='52c20371e4002cec62ac026d02e84db4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilePdfXlRegularIcon);
export default ForwardRef;
