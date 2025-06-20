import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickMdBoldIcon = (
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
      <path d='M1.5 5.75v11c0 .438.313.75.75.75h13a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-13C1 19 0 18 0 16.75v-11A.74.74 0 0 1 .75 5a.76.76 0 0 1 .75.75M10 5.5V7c.531 0 1 .469 1 1v3c0 .563-.469 1-1 1v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V12c-.562 0-1-.437-1-1V8c0-.531.438-1 1-1V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5m2 5.5c0-.531.438-1 1-1V8.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V10c.531 0 1 .469 1 1v2c0 .563-.469 1-1 1v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V14c-.562 0-1-.437-1-1zM5 8V6.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V8c.531 0 1 .469 1 1v4c0 .563-.469 1-1 1v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V14c-.562 0-1-.437-1-1V9c0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='2a801ec47f07a33cde61e31b8ebe4eab__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickMdBoldIcon);
export default ForwardRef;
