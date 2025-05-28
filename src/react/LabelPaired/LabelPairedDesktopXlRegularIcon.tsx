import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopXlRegularIcon = (
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
      <path d='M24 7.5H3c-.844 0-1.5.703-1.5 1.5v9h24V9c0-.797-.703-1.5-1.5-1.5M27 18v4.5c0 1.688-1.36 3-3 3h-7.031l.515 3h2.766c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H6.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h2.719l.515-3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3zM1.5 19.5v3c0 .844.656 1.5 1.5 1.5h21c.797 0 1.5-.656 1.5-1.5v-3zm9.469 9h5.015l-.515-3h-3.985z' />
    </g>
    <defs>
      <clipPath id='443a190297d0ba837671c311f1f8e9b2__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopXlRegularIcon);
export default ForwardRef;
