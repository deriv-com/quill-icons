import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchXlRegularIcon = (
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
      <path d='M6 6.75q.046-.703.75-.75h7.5q.703.046.75.75-.047.704-.75.75h-3v3.047q3.563.329 6 2.672l1.734-1.735q.516-.468 1.032 0 .468.516 0 1.032l-1.782 1.78q1.97 2.532 2.016 5.954-.093 4.125-2.86 6.89-2.765 2.766-6.89 2.86-4.125-.094-6.89-2.86Q.843 24.376.75 20.25q.095-3.938 2.625-6.656 2.532-2.672 6.375-3.047V7.5h-3q-.703-.046-.75-.75m-3.75 13.5q0 2.25 1.125 4.125 1.079 1.875 3 3Q8.345 28.5 10.5 28.5q2.157 0 4.125-1.125 1.922-1.125 3-3Q18.75 22.5 18.75 20.25t-1.125-4.125q-1.078-1.875-3-3Q12.657 12 10.5 12q-2.155 0-4.125 1.125-1.921 1.125-3 3Q2.25 18 2.25 20.25m9-4.5V21q-.047.704-.75.75-.703-.046-.75-.75v-5.25q.047-.703.75-.75.703.047.75.75' />
    </g>
    <defs>
      <clipPath id='e25b0a9ec0a3c8b8f610cc08cfb2f8cc__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchXlRegularIcon);
export default ForwardRef;
