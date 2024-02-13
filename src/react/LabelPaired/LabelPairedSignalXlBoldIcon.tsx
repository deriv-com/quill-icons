import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalXlBoldIcon = (
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
      <path d='M27 6q1.032.095 1.125 1.125v21.75Q28.032 29.907 27 30q-1.03-.093-1.125-1.125V7.125Q25.969 6.095 27 6m-6 4.5q1.032.095 1.125 1.125v17.25Q22.032 29.907 21 30q-1.03-.093-1.125-1.125v-17.25q.094-1.03 1.125-1.125M15 15q1.032.095 1.125 1.125v12.75Q16.032 29.907 15 30q-1.03-.093-1.125-1.125v-12.75Q13.97 15.095 15 15m-6 4.5q1.032.094 1.125 1.125v8.25Q10.032 29.907 9 30q-1.03-.093-1.125-1.125v-8.25Q7.97 19.595 9 19.5M3 24q1.032.094 1.125 1.125v3.75Q4.032 29.907 3 30q-1.03-.093-1.125-1.125v-3.75Q1.97 24.095 3 24' />
    </g>
    <defs>
      <clipPath id='797ad3efec2a8efed667a7a549c3e5c0__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalXlBoldIcon);
export default ForwardRef;
