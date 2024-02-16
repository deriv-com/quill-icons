import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaXlBoldIcon = (
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
      <path d='M2.25 8.625v16.5q.095 1.032 1.125 1.125h19.5q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-19.5q-1.454-.047-2.39-.984-.939-.937-.985-2.391v-16.5Q.095 7.595 1.125 7.5q1.032.095 1.125 1.125m11.156 7.969L10.5 13.687l-3.75 3.75v4.313h13.5v-3.656l-2.39-2.766-1.266 1.266A2.17 2.17 0 0 1 15 17.25a2.17 2.17 0 0 1-1.594-.656M15 15l1.594-1.594.281-.281a1.57 1.57 0 0 1 1.078-.422q.657.047 1.078.516l2.907 3.422q.562.609.562 1.453V22.5q0 .657-.422 1.078Q21.657 24 21 24H6q-.656 0-1.078-.422Q4.5 23.157 4.5 22.5v-5.062q0-.938.656-1.594l4.266-4.266q.469-.468 1.078-.469t1.078.47l1.828 1.827z' />
    </g>
    <defs>
      <clipPath id='2f4e7329699348cd58e03a3f2300148e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaXlBoldIcon);
export default ForwardRef;
