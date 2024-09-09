import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 5.375v3.75h2.25v-3.75zm-1.125 0c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 9.125zm7.125 4.5v3.75h2.25v-3.75zm-1.125 0c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125h-2.25a1.11 1.11 0 0 1-1.125-1.125zm-2.625 2.25h-2.25v1.5h2.25zM1.375 11h2.25c.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 13.625v-1.5C.25 11.515.742 11 1.375 11m6-5.625v1.5h2.25v-1.5zm-1.125 0c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v1.5C10.75 7.508 10.234 8 9.625 8h-2.25A1.11 1.11 0 0 1 6.25 6.875z' />
    </g>
    <defs>
      <clipPath id='a6d98a6fd86fe4c294198c9d5d660950__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnCaptionBoldIcon);
export default ForwardRef;
