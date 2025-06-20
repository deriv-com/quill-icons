import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderXlRegularIcon = (
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
      <path d='M4.125 7.5H5.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H4.125C2.672 9 1.5 10.219 1.5 11.625v1.125c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-1.125A4.13 4.13 0 0 1 4.125 7.5M.75 15c.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.5c0-.375.328-.75.75-.75m19.5 0c.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.5c0-.375.328-.75.75-.75m0-1.5a.74.74 0 0 1-.75-.75v-1.125C19.5 10.219 18.281 9 16.875 9H15.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h1.125C19.125 7.5 21 9.375 21 11.625v1.125c0 .422-.375.75-.75.75m.75 9.75v1.125a4.13 4.13 0 0 1-4.125 4.125H15.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h1.125c1.406 0 2.625-1.172 2.625-2.625V23.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75m-19.5 0v1.125A2.62 2.62 0 0 0 4.125 27H5.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H4.125A4.1 4.1 0 0 1 0 24.375V23.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75m6.75 5.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75zM7.5 8.25c0-.375.328-.75.75-.75h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-4.5a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='da3b035f3abfc16a44bee0b6ba5be2a7__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderXlRegularIcon);
export default ForwardRef;
