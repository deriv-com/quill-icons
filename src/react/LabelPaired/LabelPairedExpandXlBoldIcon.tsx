import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandXlBoldIcon = (
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
      <path d='M6.375 7.5c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 6.375 9.75H2.25v4.125A1.11 1.11 0 0 1 1.125 15C.469 15 0 14.531 0 13.875v-5.25C0 8.015.469 7.5 1.125 7.5zM0 22.125C0 21.515.469 21 1.125 21c.61 0 1.125.516 1.125 1.125v4.125h4.125c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 6.375 28.5h-5.25C.469 28.5 0 28.031 0 27.375zM19.875 7.5c.61 0 1.125.516 1.125 1.125v5.25A1.11 1.11 0 0 1 19.875 15c-.656 0-1.125-.469-1.125-1.125V9.75h-4.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125zM18.75 22.125c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v5.25a1.11 1.11 0 0 1-1.125 1.125h-5.25c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h4.125z' />
    </g>
    <defs>
      <clipPath id='701e39560ff2b84384092f0821497b6c__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandXlBoldIcon);
export default ForwardRef;
