import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2XlRegularIcon = (
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
      <path d='M3.75 9c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5C9 9.375 8.625 9 8.25 9zm-2.25.75A2.25 2.25 0 0 1 3.75 7.5h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25zM3.75 21c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5c0-.375-.375-.75-.75-.75zm-2.25.75a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25zM20.25 9h-4.5c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5c0-.375-.375-.75-.75-.75m-4.5-1.5h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25v-4.5a2.25 2.25 0 0 1 2.25-2.25m0 13.5c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5c0-.375-.375-.75-.75-.75zm-2.25.75a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25z' />
    </g>
    <defs>
      <clipPath id='435910836dd3cd63211d9de42d0b8a4b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2XlRegularIcon);
export default ForwardRef;
