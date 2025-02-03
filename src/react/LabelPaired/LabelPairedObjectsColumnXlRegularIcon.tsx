import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnXlRegularIcon = (
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
      <path d='M2.25 9c-.422 0-.75.375-.75.75v7.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-7.5c0-.375-.375-.75-.75-.75zM0 9.75A2.25 2.25 0 0 1 2.25 7.5h4.5C7.969 7.5 9 8.531 9 9.75v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 17.25zM14.25 18c-.422 0-.75.375-.75.75v7.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-7.5c0-.375-.375-.75-.75-.75zm-2.25.75a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 12 26.25zM6.75 22.5h-4.5c-.422 0-.75.375-.75.75v3c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-3c0-.375-.375-.75-.75-.75M2.25 21h4.5C7.969 21 9 22.031 9 23.25v3a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 26.25v-3A2.25 2.25 0 0 1 2.25 21m12-12c-.422 0-.75.375-.75.75v3c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-3c0-.375-.375-.75-.75-.75zM12 9.75a2.25 2.25 0 0 1 2.25-2.25h4.5C19.969 7.5 21 8.531 21 9.75v3A2.25 2.25 0 0 1 18.75 15h-4.5A2.22 2.22 0 0 1 12 12.75z' />
    </g>
    <defs>
      <clipPath id='7ccc0404f218e00c0f1745f0c47c8dae__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnXlRegularIcon);
export default ForwardRef;
