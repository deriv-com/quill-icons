import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 18q.094-3.187 2.203-5.297T7.5 10.5h3.375q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H7.5q-2.25.047-3.703 1.547Q2.297 15.75 2.25 18q.047 2.25 1.547 3.703 1.453 1.5 3.703 1.547h3.375q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H7.5q-3.187-.094-5.297-2.203T0 18m27 0q-.094 3.187-2.203 5.297T19.5 25.5h-3.375q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125H19.5q2.25-.047 3.703-1.547 1.5-1.453 1.547-3.703-.047-2.25-1.547-3.703-1.453-1.5-3.703-1.547h-3.375q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125H19.5q3.187.094 5.297 2.203T27 18M8.625 16.875h9.75q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-9.75Q7.595 19.032 7.5 18q.095-1.03 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='86d4d5a238b99bf3c2dafa09fd8b95e1__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleXlBoldIcon);
export default ForwardRef;
