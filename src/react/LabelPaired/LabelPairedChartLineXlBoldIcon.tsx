import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineXlBoldIcon = (
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
      <path d='M2.25 8.625v16.5q.095 1.032 1.125 1.125h19.5q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-19.5q-1.454-.047-2.39-.984-.939-.937-.985-2.391v-16.5Q.095 7.595 1.125 7.5q1.032.095 1.125 1.125m19.922 5.297-6.375 6.375q-.797.656-1.594 0L10.5 16.594l-3.703 3.703q-.797.656-1.594 0-.656-.797 0-1.594l4.5-4.5q.329-.328.797-.328t.797.328L15 17.906l5.578-5.578q.797-.655 1.594 0 .656.797 0 1.594' />
    </g>
    <defs>
      <clipPath id='2969dd65b7d434c1d4078a5860081835__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineXlBoldIcon);
export default ForwardRef;
