import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M6.5 7c-.281 0-.5.25-.5.5V8H5c-.562 0-1 .469-1 1v1h8V9c0-.531-.469-1-1-1h-1v-.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5V8H7v-.5c0-.25-.25-.5-.5-.5M4 15c0 .563.438 1 1 1h6c.531 0 1-.437 1-1v-4H4z' />
    </g>
    <defs>
      <clipPath id='f293a14dd908efc1bc04f95ac60abdd0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarMdFillIcon);
export default ForwardRef;
