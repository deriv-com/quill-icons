import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarXlRegularIcon = (
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
      <path d='M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m9.75-7.5c.375 0 .75.375.75.75V12h3v-.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75V12h.75c1.219 0 2.25 1.031 2.25 2.25v7.5A2.25 2.25 0 0 1 15.75 24h-7.5A2.22 2.22 0 0 1 6 21.75v-7.5A2.25 2.25 0 0 1 8.25 12H9v-.75c0-.375.328-.75.75-.75M7.5 14.25V15h9v-.75c0-.375-.375-.75-.75-.75h-7.5c-.422 0-.75.375-.75.75m9 2.25h-9v5.25c0 .422.328.75.75.75h7.5c.375 0 .75-.328.75-.75z' />
    </g>
    <defs>
      <clipPath id='384f1dd5c910430a6b1b708cb655bbe9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarXlRegularIcon);
export default ForwardRef;
