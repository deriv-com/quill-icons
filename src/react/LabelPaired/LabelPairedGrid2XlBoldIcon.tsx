import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2XlBoldIcon = (
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
      <path d='M3.75 9.75v4.5h4.5v-4.5zm-2.25 0A2.25 2.25 0 0 1 3.75 7.5h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25zm2.25 12v4.5h4.5v-4.5zm-2.25 0a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25zm18.75-12h-4.5v4.5h4.5zm-4.5-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25v-4.5a2.25 2.25 0 0 1 2.25-2.25m0 14.25v4.5h4.5v-4.5zm-2.25 0a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25z' />
    </g>
    <defs>
      <clipPath id='c42152b497a5c64ce883bfb639ca6393__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2XlBoldIcon);
export default ForwardRef;
