import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarXlRegularIcon = (
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
      <path d='M5.25 6c.375 0 .75.375.75.75V9h9V6.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75V9H18c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V12c0-1.64 1.313-3 3-3h1.5V6.75c0-.375.328-.75.75-.75m14.25 9h-18v12c0 .844.656 1.5 1.5 1.5h15c.797 0 1.5-.656 1.5-1.5zM18 10.5H3c-.844 0-1.5.703-1.5 1.5v1.5h18V12c0-.797-.703-1.5-1.5-1.5' />
    </g>
    <defs>
      <clipPath id='bf996ec217f24b22d3dcc9a36c0277fd__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarXlRegularIcon);
export default ForwardRef;
