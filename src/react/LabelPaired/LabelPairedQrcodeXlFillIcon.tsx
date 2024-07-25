import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeXlFillIcon = (
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
      <path d='M0 9.75A2.25 2.25 0 0 1 2.25 7.5h4.5C7.969 7.5 9 8.531 9 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 14.25zm3 .75v3h3v-3zM0 21.75a2.25 2.25 0 0 1 2.25-2.25h4.5C7.969 19.5 9 20.531 9 21.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 26.25zm3 .75v3h3v-3zm11.25-15h4.5C19.969 7.5 21 8.531 21 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 12 14.25v-4.5a2.25 2.25 0 0 1 2.25-2.25m3.75 3h-3v3h3zm-6 9.75c0-.375.328-.75.75-.75h3c.375 0 .75.375.75.75 0 .422.328.75.75.75h1.5c.375 0 .75-.328.75-.75 0-.375.328-.75.75-.75.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75h-3a.74.74 0 0 1-.75-.75c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v3c0 .422-.375.75-.75.75h-1.5a.74.74 0 0 1-.75-.75zm5.25 8.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75 0 .422-.375.75-.75.75m3 0a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75 0 .422-.375.75-.75.75' />
    </g>
    <defs>
      <clipPath id='2329ef8bdf683fbc73a5feb1cd41a4d2__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeXlFillIcon);
export default ForwardRef;
