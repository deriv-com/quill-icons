import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownXlBoldIcon = (
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
      <path d='M1.125 7.5c.61 0 1.125.516 1.125 1.125v16.5c0 .656.469 1.125 1.125 1.125h19.5c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-19.5A3.36 3.36 0 0 1 0 25.125v-16.5C0 8.015.469 7.5 1.125 7.5m16.5 3.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h3.75c.281 0 .563.14.797.328.187.235.328.516.328.797v3.75A1.11 1.11 0 0 1 21.375 15c-.656 0-1.125-.469-1.125-1.125v-1.031l-5.953 5.953c-.469.469-1.172.469-1.594 0L9.75 15.844l-2.953 2.953c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547l3.75-3.75c.422-.469 1.125-.469 1.594 0l2.953 2.953 5.156-5.203zm0 12.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h1.031l-2.203-2.203 1.594-1.594 2.203 2.203v-1.031c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v3.75c0 .328-.14.61-.328.797a1.1 1.1 0 0 1-.797.328z' />
    </g>
    <defs>
      <clipPath id='51cc059161190530ee5f24766fb872ca__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownXlBoldIcon);
export default ForwardRef;
