import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeXlBoldIcon = (
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
      <path d='M7.125 7.125V9h6.75V7.125C13.875 6.515 14.344 6 15 6c.61 0 1.125.516 1.125 1.125V9H18c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V12c0-1.64 1.313-3 3-3h1.875V7.125C4.875 6.515 5.344 6 6 6c.61 0 1.125.516 1.125 1.125M2.25 15v12c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75V15zm2.25 4.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5m10.5 3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5m-6-3c0-.61.469-1.125 1.125-1.125h5.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-5.25C9.469 20.625 9 20.156 9 19.5m1.875 3.375c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-5.25c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125z' />
    </g>
    <defs>
      <clipPath id='13c3d6b2d505fd5e9284720eab9ac7e2__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeXlBoldIcon);
export default ForwardRef;
