import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockXlBoldIcon = (
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
      <path d='M0 8.625C0 8.015.469 7.5 1.125 7.5c.61 0 1.125.516 1.125 1.125v16.5c0 .656.469 1.125 1.125 1.125h12.188c.28.844.75 1.594 1.312 2.25h-13.5A3.36 3.36 0 0 1 0 25.125zm5.203 8.625 3.75-3.75c.422-.469 1.125-.469 1.594 0l2.953 2.953c1.688-1.734 3.422-3.469 5.156-5.203h-1.031c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h3.75c.281 0 .563.14.797.328.187.235.328.516.328.797v3.75A1.11 1.11 0 0 1 21.375 15c-.656 0-1.125-.469-1.125-1.125v-1.031l-5.953 5.953c-.469.469-1.172.469-1.594 0L9.75 15.844l-2.953 2.953c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547m11.297 6c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m6-3v3c0 .422.328.75.75.75h2.25c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75H24v-2.25c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75' />
    </g>
    <defs>
      <clipPath id='bf7dff1e554ba370fdaf88627e4e4194__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockXlBoldIcon);
export default ForwardRef;
