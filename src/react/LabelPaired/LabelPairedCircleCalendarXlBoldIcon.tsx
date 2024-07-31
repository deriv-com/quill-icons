import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarXlBoldIcon = (
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
      <path d='M21.75 18c0-3.469-1.875-6.656-4.875-8.437-3.047-1.735-6.75-1.735-9.75 0C4.078 11.343 2.25 14.53 2.25 18c0 3.516 1.828 6.703 4.875 8.484 3 1.735 6.703 1.735 9.75 0 3-1.78 4.875-4.968 4.875-8.484M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m9.75-6.75c.375 0 .75.375.75.75v.75h3V12c0-.375.328-.75.75-.75.375 0 .75.375.75.75v.75h.75c1.219 0 2.25 1.031 2.25 2.25v6a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.22 2.22 0 0 1 6 21v-6a2.25 2.25 0 0 1 2.25-2.25H9V12c0-.375.328-.75.75-.75M8.25 21h7.5v-4.5h-7.5z' />
    </g>
    <defs>
      <clipPath id='e471e5ab5f39325f9dcb674cc0cd8944__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarXlBoldIcon);
export default ForwardRef;
