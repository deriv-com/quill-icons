import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 10.5c0-1.219-1.031-2.25-2.25-2.25a2.25 2.25 0 0 0-2.25 2.25V18c0 1.266.984 2.25 2.25 2.25A2.25 2.25 0 0 0 11.25 18zm-6.75 0a4.501 4.501 0 0 1 9 0V18a4.501 4.501 0 0 1-9 0zM3 16.125V18c0 3.328 2.672 6 6 6 3.281 0 6-2.672 6-6v-1.875c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125V18c0 4.219-3.14 7.64-7.125 8.203v1.547h2.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 12.375 30h-6.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h2.25v-1.547A8.25 8.25 0 0 1 .75 18v-1.875c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='64ec972a39abb2b60e503e4c8cbfcea0__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneXlBoldIcon);
export default ForwardRef;
