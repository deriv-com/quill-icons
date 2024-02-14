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
      <path d='M1.125 7.5q1.032.095 1.125 1.125v16.5q.095 1.032 1.125 1.125h19.5q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-19.5q-1.454-.047-2.39-.984-.939-.937-.985-2.391v-16.5Q.095 7.595 1.125 7.5m16.5 3.75q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125h3.75q.469 0 .797.328.328.329.328.797v3.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-1.031l-5.953 5.953q-.797.656-1.594 0L9.75 15.844l-2.953 2.953q-.797.656-1.594 0-.656-.797 0-1.594l3.75-3.75q.797-.655 1.594 0l2.953 2.953 5.156-5.156zm0 12.75q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125h1.031l-2.203-2.203 1.594-1.594 2.203 2.203v-1.031q.094-1.03 1.125-1.125 1.032.094 1.125 1.125v3.75q0 .469-.328.797a1.09 1.09 0 0 1-.797.328z' />
    </g>
    <defs>
      <clipPath id='242669e00ce31494cf05a7310d21f528__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownXlBoldIcon);
export default ForwardRef;
