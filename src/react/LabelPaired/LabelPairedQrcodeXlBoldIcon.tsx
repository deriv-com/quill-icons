import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeXlBoldIcon = (
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
      <path d='M6.75 9.75h-4.5v4.5h4.5zM2.25 7.5h4.5C7.969 7.5 9 8.531 9 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 14.25v-4.5A2.25 2.25 0 0 1 2.25 7.5m4.5 14.25h-4.5v4.5h4.5zm-4.5-2.25h4.5C7.969 19.5 9 20.531 9 21.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 26.25v-4.5a2.25 2.25 0 0 1 2.25-2.25m12-9.75v4.5h4.5v-4.5zm-2.25 0a2.25 2.25 0 0 1 2.25-2.25h4.5C19.969 7.5 21 8.531 21 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 12 14.25zm-8.625 1.875c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm.75 11.25h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m11.25-11.25c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zM12 20.25c0-.375.328-.75.75-.75h3c.375 0 .75.375.75.75 0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75 0-.375.328-.75.75-.75.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75h-3a.74.74 0 0 1-.75-.75c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v3c0 .422-.375.75-.75.75h-1.5a.74.74 0 0 1-.75-.75zM17.25 27c.375 0 .75.375.75.75 0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75m3 0c.375 0 .75.375.75.75 0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='e0d69e69d46451b047d6dad23320bdce__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeXlBoldIcon);
export default ForwardRef;
