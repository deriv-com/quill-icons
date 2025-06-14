import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18 9H3c-.844 0-1.5.703-1.5 1.5V21c0 .844.656 1.5 1.5 1.5h15c.797 0 1.5-.656 1.5-1.5V10.5c0-.797-.703-1.5-1.5-1.5M3 24c-1.687 0-3-1.312-3-3V10.5c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3V21c0 1.688-1.36 3-3 3h-4.594l.985 3h2.859c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h2.813l.984-3zm5.156 3h4.64l-.983-3H9.14zM24.75 9c-.422 0-.75.375-.75.75V12h4.5V9.75c0-.375-.375-.75-.75-.75zM24 13.5V15h4.5v-1.5zm0 12.75c0 .422.328.75.75.75h3c.375 0 .75-.328.75-.75V16.5H24zm-1.5-16.5a2.25 2.25 0 0 1 2.25-2.25h3C28.969 7.5 30 8.531 30 9.75v16.5a2.25 2.25 0 0 1-2.25 2.25h-3a2.22 2.22 0 0 1-2.25-2.25zm3.75 13.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='2c4425d6286ad3f63188c536a032e66a__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerXlRegularIcon);
export default ForwardRef;
